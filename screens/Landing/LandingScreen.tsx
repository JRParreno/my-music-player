import * as React from "react";
import {
    Alert,
    StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "../../components/Theme/Themed";
import { commonColor } from "../../constants/Colors";
import { font } from "../../constants/FontStyles";
import WithSafeAreaView from "../../components/WithSafeAreaView";
import LottieView from 'lottie-react-native';
import RoundedSquareButton, { ButtonRoundedSquare } from "../../components/Buttons/RoundedButton";
import { DataProvider } from "recyclerlistview";
import * as MediaLibrary from 'expo-media-library';
import { useContext, useState, useEffect } from "react";
import AudioContext from "../../contexts/AudioContext";

export default function LandingScreen() {
    const navigation = useNavigation();
    const audioContext = useContext(AudioContext);
    const [loading, setLoading] = useState(false);
    const handleContinue = () => {
        if (audioContext.audioState.audios === null) {
            getPermissions();
        }
        navigation.navigate("Home");
    }

    const getAudioFiles = async () => {
        setLoading(true);
        await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
        }).then(data => {
            MediaLibrary.getAssetsAsync({
                mediaType: 'audio',
                first: data.totalCount,
            }).then(result => {
                console.log(result.totalCount);
                audioContext.audioDispatch({ type: 'set_audio', payload: result.assets });
            }).finally(() => setLoading(false));
        });
    }

    const permissionAlert = () => {
        Alert.alert('Permission required', 'This app needs to read audio files!',
            [
                {
                    text: 'Good to go',
                    onPress: () => getPermissions(),
                },
                {
                    text: 'Cancel',
                    onPress: () => permissionAlert(),
                }
            ]);
    }

    const getPermissions = async () => {
        const permission = await MediaLibrary.getPermissionsAsync();
        if (permission) {
            // get all audito files
            getAudioFiles();
        }

        if (!permission.granted && permission.canAskAgain) {
            const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync();
            if (status === 'denied' && canAskAgain) {
                // display alert that user allow this permission
                permissionAlert();
            }

            if (status === 'granted') {
                getAudioFiles();
            }

            if (status === 'denied' && !canAskAgain) {
                // display some error
            }
        }
    }

    useEffect(() => {
        let isMounted = true;               // note mutable flag
        if (isMounted) {
            getPermissions();
        }

        return () => { isMounted = false };
    }, []);


    return (
        <WithSafeAreaView loading={loading}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>My Music Player</Text>
                    <Text style={styles.subHeaderText}>Hello, thank you for installing our app!</Text>
                    <Text style={styles.subHeaderText}>{`This app is a music player with beautiful and modern design.\n\n\nPress the button to continue`}</Text>
                    <View style={styles.lottieBox}>
                        <LottieView style={{ flex: 1, }} source={require("../../assets/lottiefiles/29469-social-music-loading-animation.json")} autoPlay loop />
                    </View>
                </View>

                <View style={styles.bottom}>
                    <RoundedSquareButton
                        onPress={handleContinue}
                        type={ButtonRoundedSquare.primary}
                        title={'Continue'}
                        textStyle={{ fontFamily: font.regular, fontSize: font.title, color: '#262626' }}
                    />
                </View>
            </View>
        </WithSafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: commonColor.main
    },
    header: {
        flex: 1,
    },
    headerText: {
        padding: 10,
        fontSize: font.welcome,
        fontFamily: font.bold,
        textAlign: 'center'
    },
    subHeaderText: {
        fontSize: font.title,
        fontFamily: font.regular,
        textAlign: "center",
        paddingHorizontal: 20,
        marginTop: 20,
    },
    bottom: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 25,
        paddingHorizontal: 25,
    },
    lottieBox: {
        flex: 1,
        padding: 5
    }
});
