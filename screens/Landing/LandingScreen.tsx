import * as React from "react";
import {
    StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "../../components/Theme/Themed";
import { commonColor } from "../../constants/Colors";
import { font } from "../../constants/FontStyles";
import WithSafeAreaView from "../../components/WithSafeAreaView";
import LottieView from 'lottie-react-native';
import RoundedSquareButton, { ButtonRoundedSquare } from "../../components/Buttons/RoundedButton";

export default function LandingScreen() {
    const navigation = useNavigation();

    const handleContinue = () => {
        navigation.navigate("Home");
    }

    return (
        <WithSafeAreaView loading={false}>
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
        backgroundColor: commonColor.white
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
