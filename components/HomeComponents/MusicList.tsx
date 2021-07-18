import * as React from "react";
import { View, Text } from "../../components/Theme/Themed";
import { StyleSheet, TouchableOpacity } from "react-native";
import { commonColor } from "../../constants/Colors";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";


export default function MusicList() {
    const [sound, setSound] = useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/Test.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    // useEffect(() => {
    //     return sound
    //         ? () => {
    //             console.log('Unloading Sound');
    //             sound.unloadAsync();
    //         }
    //         : undefined;
    // }, [sound]);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={playSound}
            >
                <View style={styles.childContainer}>
                    <Ionicons name={'musical-note-outline'} size={24} />
                    <View style={styles.titleContainer}>
                        <Text>When I met you</Text>
                    </View>
                    <Ionicons name={'heart-outline'} size={24} />
                    <Ionicons name={'ellipsis-horizontal-outline'} size={24} />
                </View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonColor.main,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "red"
    },
    childContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: commonColor.main
    },
    titleContainer: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});