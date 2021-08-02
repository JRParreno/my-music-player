import * as React from "react";
import { View, StyleSheet, Text, StyleProp, ViewStyle, Pressable } from "react-native";


interface IProps {
    title: string;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
    background?: string;
    color?: string
}


export default function LandingButton(props: IProps) {

    return (
        <Pressable
            onPress={props.onPress}
            style={[styles.buttonStyle, { backgroundColor: props.background }]}
        >
            <View style={[styles.container, props.style]}>
                <Text style={{ color: props.color }}>{props.title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    container: {
        flex: 1,
    }
});