import { Button, Image, PixelRatio, StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import * as React from "react";
import { View, Text } from "../../components/Theme/Themed";
import { commonColor } from "../../constants/Colors";
import { font } from "../../constants/FontStyles";
import { Ionicons } from "@expo/vector-icons";


interface IProps {
    height?: number;
    play?: boolean;
}

export default function BottomComponent(props: IProps) {
    return (
        <View style={[styles.container, { height: props.play ? PixelRatio.getPixelSizeForLayoutSize(75) : undefined }]}>
            {/* {props.play && (
                

            )} */}
            {/* <View style={styles.playerContainer}>
                <Image
                    source={require('../../assets/icon.png')}
                    style={{ flex: 1 }}
                    height={50}
                    width={50}
                />
            </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: PixelRatio.getPixelSizeForLayoutSize(45),
        backgroundColor: commonColor.white,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: undefined
    },
    playerContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
