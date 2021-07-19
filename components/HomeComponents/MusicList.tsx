import * as React from "react";
import { View, Text } from "../../components/Theme/Themed";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { commonColor } from "../../constants/Colors";
import { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import * as MediaLibrary from 'expo-media-library';
import { ScrollView } from "react-native-gesture-handler";
import { font } from "../../constants/FontStyles";
import AudioContext from "../../contexts/AudioContext";

export default function MusicList() {
    const [audioFiles, setAudioFiles] = useState<MediaLibrary.Asset[] | null>(null);
    const audioContext = useContext(AudioContext);

    const getAudioFiles = async () => {
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
        });
        media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: media.totalCount,
        });
        audioContext.audioDispatch({ type: 'view_audio', payload: media.assets });
        Object.keys(audioContext.audioState.audios).map((value, index) => {
            let _devices = audioContext.audioState.audios[value];
            console.log(_devices);
        });
        // console.log(Object.keys(audioContext.audioState.audios)[0]);

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

    const songName = (song: string) => {
        let middle = song.indexOf('-');
        let titleTemp = song.substring(middle + 2, song.length);

        return titleTemp.substring(0, titleTemp.indexOf('.'));
    }

    const singerName = (song: string) => {
        let middle = song.indexOf('-');
        let singer = song.substring(0, middle - 1);
        return singer;
    }

    useEffect(() => {
        getPermissions();
    }, [])

    return (
        <View style={styles.container}>
            {Object.keys(audioContext.audioState.audios) && (
                <ScrollView>
                    {Object.keys(audioContext.audioState.audios).map((value, index) => {
                        let _audio = audioContext.audioState.audios[value];

                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => { }}
                            >
                                <View style={styles.childContainer}>
                                    <View style={styles.albumContainer}>
                                        <Ionicons name={'musical-notes-outline'} color={commonColor.miniPlayer} size={35} />
                                    </View>

                                    <View style={styles.titleContainer}>
                                        <Text style={styles.songText}
                                            numberOfLines={1}
                                        >{songName(_audio[0].filename)}</Text>
                                        <Text style={styles.singerText}>{singerName(_audio[0].filename)}</Text>
                                    </View>
                                    <View style={styles.optionContainer}>
                                        <Ionicons name={'heart-outline'} size={24} color={'#FF0000'} />
                                        <Ionicons name={'ellipsis-horizontal-outline'} size={24} color={'#858583'} style={{ paddingHorizontal: 7 }} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        )
                    })}

                </ScrollView>

            )}


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonColor.main,
        paddingHorizontal: 20,
    },
    childContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: commonColor.main,
        borderBottomWidth: 1,
        borderBottomColor: "#93938A"
    },
    titleContainer: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 7,
        paddingHorizontal: 10,
    },
    optionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    albumContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    songText: {
        fontSize: font.subtitle,
        fontFamily: font.regular,
        backgroundColor: commonColor.main,
        color: '#000'
    },
    singerText: {
        fontSize: font.subtitle,
        fontFamily: font.regular,
        backgroundColor: commonColor.main,
        color: '#858583'
    }
});