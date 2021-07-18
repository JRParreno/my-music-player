import { Button, PixelRatio, StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import * as React from "react";
import { View, Text } from "../../components/Theme/Themed";
import { commonColor } from "../../constants/Colors";
import { font } from "../../constants/FontStyles";

export enum ButtonRoundedSquare {
    primary,
    secondary,
    white,
    transparent,
    lightPrimary,
}

interface IProps {
    title: string;
    onPress: () => void;
    type: ButtonRoundedSquare;
    style?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    customPadding?: boolean;
}

function buttonTypeStyle(type: ButtonRoundedSquare): StyleProp<ViewStyle> {
    switch (type) {
        case ButtonRoundedSquare.primary:
            return {
                backgroundColor: commonColor.main,
            };
        case ButtonRoundedSquare.secondary:
            return {
                backgroundColor: commonColor.secondary,
            };
        case ButtonRoundedSquare.white:
            return {
                backgroundColor: '#fff',
            };
        case ButtonRoundedSquare.lightPrimary:
            return {
                backgroundColor: '#F1F6FE',
            };
        default:
            return {
                backgroundColor: commonColor.transparent,
            };
    }
}

function textStyle(type: ButtonRoundedSquare): StyleProp<TextStyle> {
    switch (type) {
        case ButtonRoundedSquare.primary:
        case ButtonRoundedSquare.secondary:
            return {
                color: 'white',
            };
        default:
            return {
                color: '#53287f',
            };
    }
}

export default function RoundedSquareButton(props: IProps) {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <View style={[
                styles.button, props.buttonStyle,
                buttonTypeStyle(props.type),
                { paddingVertical: props.customPadding ? 0 : 10 }
            ]}>
                <Text style={[
                    styles.text,
                    textStyle(props.type),
                    props.textStyle
                ]}
                    allowFontScaling
                    adjustsFontSizeToFit
                    numberOfLines={1}
                >{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "stretch",
        borderRadius: 60,
    },
    text: {
        textAlign: "center",
        fontFamily: 'poppins-light',
        paddingHorizontal: 10
    },
});
