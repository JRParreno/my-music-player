import * as React from "react";
import { View, Text } from "../../components/Theme/Themed";
import { Alert, Dimensions, RefreshControl, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { commonColor } from "../../constants/Colors";
import { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Audio, AVPlaybackStatus } from "expo-av";
import * as MediaLibrary from 'expo-media-library';
import { ScrollView } from "react-native-gesture-handler";
import { font } from "../../constants/FontStyles";
import AudioContext from "../../contexts/AudioContext";
import { DataProvider, RecyclerListView, LayoutProvider } from "recyclerlistview";
import { Sound } from "expo-av/build/Audio";
import { pause, play } from "./Controller/AudioController";
import { ListItem, Avatar } from 'react-native-elements';


export default function MusicList() {
    const [loading, setLoading] = useState(false);
    const audioContext = useContext(AudioContext);
    const dataProvider = new DataProvider((r1, r2) => r1 !== r2);
    const [playback, setPlayback] = useState<Sound | undefined>(undefined);
    const [statusObj, setStatusObj] = useState<AVPlaybackStatus | undefined>(undefined);
    const [currentAudio, setCurrentAudio] = useState<MediaLibrary.Asset | null>(null);
    const [audioFiles, setAudioFiles] = useState<MediaLibrary.Asset[] | null>(null)

    const handleAudioPress = async (audio: MediaLibrary.Asset) => {

        // stat song    
        if (statusObj === undefined) {
            const playbackObj = new Audio.Sound();
            const status = await play(playbackObj, audio);
            return [setPlayback(playbackObj), setStatusObj(status), setCurrentAudio(audio)];
        }

        // pause audio
        if (statusObj.isLoaded && statusObj.isPlaying && playback) {
            const status = await pause(playback, audio);
            return [setStatusObj(status)];
        }

        // resume audio
        if (statusObj.isLoaded && !statusObj.isPlaying && playback && currentAudio) {
            if (currentAudio.id === audio.id) {
                console.log('audio is resume playing');
                const status = await playback.playAsync();
                return [setStatusObj(status)];
            }
        }


        // select another audio
        //         if (statusObj.isLoaded && currentAudio.id !== audio.id) {
        //             const status = await playNext(playbackObj, audio.uri);


        //             // select another audio
        // export const playNext = async (playbackObj, uri) => {
        //     try {
        //       await playbackObj.stopAsync();
        //       await playbackObj.unloadAsync();
        //       return await play(playbackObj, uri);
        //     } catch (error) {
        //       console.log('error inside playNext helper method', error.message);
        //     }
        //   };
        //             const index = audioFiles.findIndex(({ id }) => id === audio.id);
        //             updateState(context, {
        //                 currentAudio: audio,
        //                 statusObj: status,
        //                 isPlaying: true,
        //                 currentAudioIndex: index,
        //                 isPlayListRunning: false,
        //                 activePlayList: [],
        //                 ...playListInfo,
        //             });
        //             return storeAudioForNextOpening(audio, index);
        //         }
    }

    const getAudioFiles = async () => {
        // setLoading(true);
        await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
        }).then(data => {
            MediaLibrary.getAssetsAsync({
                mediaType: 'audio',
                first: data.totalCount,
            }).then(result => {
                // console.log(result);
                // audioContext.audioDispatch({ type: 'set_audio', payload: result.assets });
            }).finally(() => setLoading(false));
        });
        // setAudioFiles(audioContext.audioState.audios['audioFiles']);
    }

    const layoutProvider = new LayoutProvider((i) => 'audio', (type, dim) => {
        dim.width = Dimensions.get('window').width;
        dim.height = 70;
    });

    const renderItem = ({ item }) => (
        <ListItem bottomDivider >
            <Avatar source={{ uri: `${item.uri.substring(0, (item.uri.lastIndexOf('/') + 1))}cover.jpg` }} />
            <ListItem.Content>
                <ListItem.Title>{songName(item.filename)}</ListItem.Title>
                <ListItem.Subtitle>{singerName(item.filename)}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )

    const songName = (song: string) => {
        let middle = song.lastIndexOf('-');
        let titleTemp = song.substring(middle + 2, song.length);

        return titleTemp.substring(0, titleTemp.indexOf('.'));
    }

    const singerName = (song: string) => {
        let middle = song.lastIndexOf('-');
        let singer = song.substring(0, middle - 1);
        return singer;
    }

    const keyExtractor = (item, index) => index.toString();

    useEffect(() => {
        getAudioFiles();
        // console.log(audioContext.audioState.audios['audios']);
    }, [])

    return (
        <View style={styles.container}>
            {audioContext.audioState.audios && (
                <FlatList
                    keyExtractor={keyExtractor}
                    data={audioContext.audioState.audios['audios']}
                    renderItem={renderItem}
                />
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
    },
    musicContainer: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // paddingVertical: 7,
        // paddingHorizontal: 10,
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