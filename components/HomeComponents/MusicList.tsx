import * as React from "react";
import { View, Text } from "../../components/Theme/Themed";
import { Alert, Dimensions, RefreshControl, StyleSheet, TouchableOpacity } from "react-native";
import { commonColor } from "../../constants/Colors";
import { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import * as MediaLibrary from 'expo-media-library';
import { ScrollView } from "react-native-gesture-handler";
import { font } from "../../constants/FontStyles";
import AudioContext from "../../contexts/AudioContext";
import { DataProvider, RecyclerListView, LayoutProvider } from "recyclerlistview";

export default function MusicList() {
    const [loading, setLoading] = useState(false);
    const audioContext = useContext(AudioContext);
    const dataProvider = new DataProvider((r1, r2) => r1 !== r2);
    const [audioFiles, setAuidoFiles] = useState<MediaLibrary.Asset | null>(null);

    const songName = (song: string) => {
        let middle = song.indexOf('-');
        let titleTemp = song.substring(middle + 2, song.length);

        return titleTemp.substring(0, titleTemp.indexOf('.'));
    }

    console.log(Object.keys(audioContext.audioState.audios));

    const singerName = (song: string) => {
        let middle = song.indexOf('-');
        let singer = song.substring(0, middle - 1);
        return singer;
    }


    const layoutProvider = new LayoutProvider((i) => 'audio', (type, dim) => {
        dim.width = Dimensions.get('window').width;
        dim.height = 70;
    });

    const rowRenderer = (type, item) => {
        return (
            <TouchableOpacity
                key={item.id}
                onPress={() => { }}
            >
                <View style={styles.childContainer}>
                    <View style={styles.albumContainer}>
                        <Ionicons name={'musical-notes-outline'} color={commonColor.miniPlayer} size={35} />
                    </View>

                    <View style={styles.titleContainer}>
                        <Text style={styles.songText}
                            numberOfLines={1}
                        >{songName(item[0].filename)}</Text>
                        <Text style={styles.singerText}>{singerName(item[0].filename)}</Text>
                    </View>
                    <View style={styles.optionContainer}>
                        <Ionicons name={'heart-outline'} size={24} color={'#FF0000'} />
                        <Ionicons name={'ellipsis-horizontal-outline'} size={24} color={'#858583'} style={{ paddingHorizontal: 7 }} />
                    </View>

                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            {Object.keys(audioContext.audioState.audios) && dataProvider && (
                <RecyclerListView
                    dataProvider={dataProvider.cloneWithRows(Object.keys(audioContext.audioState.audios).map((value) => (audioContext.audioState.audios[value])))}
                    layoutProvider={layoutProvider}
                    rowRenderer={rowRenderer}
                    scrollViewProps={{
                        refreshControl: (
                            <RefreshControl
                                refreshing={loading}
                                onRefresh={async () => {
                                    setLoading(true);
                                    dataProvider.cloneWithRows(audioContext.audioState.audios[0]);
                                    setLoading(false);
                                }}
                            />
                        )
                    }}
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