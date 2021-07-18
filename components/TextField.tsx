import {
    StyleProp,
    StyleSheet,
    TextStyle,
    ViewStyle,
} from "react-native";
import * as React from "react";
import { View, Text } from "../components/Theme/Themed";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { font } from "../constants/FontStyles";
import { commonColor } from "../constants/Colors";


interface IProps {
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<ViewStyle>;
    value: string;
    placeholder?: string;
    onChange?: any;
    textType?: any;
    autofocus?: boolean;
    secureTextEntry?: boolean;
    textStyle?: StyleProp<TextStyle>;
    disabled?: Boolean;
    onTap?: () => void;
    iconLeftName?: any;
    iconRightName?: any;
    onPressRightIcon?: () => void;
    onPressLeftIcon?: () => void;
    iconVisible?: boolean;
    iconColor?: StyleProp<TextStyle>;
}

export default function TextField(props: IProps) {
    return (
        <View style={[styles.inputSection, props.style]} pointerEvents={props.disabled ? "none" : "auto"}>
            {props.iconLeftName ? <Ionicons name={props.iconLeftName} size={20} style={[styles.iconStyle, props.iconColor, { display: props.iconVisible ? "flex" : "none" }]} onPress={props.onPressLeftIcon} /> : null}

            <TextInput
                style={[styles.textInput, props.textStyle]}
                placeholder={props.placeholder}
                autoFocus={props.autofocus}
                value={props.value}
                autoCapitalize={"none"}
                autoCorrect={false}
                textContentType={props.textType}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChange}
            />
            {props.iconRightName ? <Ionicons name={props.iconRightName} size={20} style={[styles.iconStyle, { display: props.iconVisible ? "flex" : "none" }]} onPress={props.onPressRightIcon} /> : null}
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        textAlign: "center",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        shadowColor: "black",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
    },
    inputSection: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        color: "#fff",
        borderColor: commonColor.miniPlayer,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: commonColor.main
    },
    iconStyle: {
        paddingLeft: 2,
        color: "#4E338C",
    },
    text: {
        fontSize: font.title,
        fontFamily: 'poppins-regular',
    },
    textInput: {
        paddingLeft: 10,
        flex: 3,
        width: "100%",
        fontSize: font.title,
        fontFamily: 'poppins-light',
        height: "100%",
        color: "#262626"
    },
});
