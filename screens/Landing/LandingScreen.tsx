import * as React from "react";
import {
    StyleSheet,
    Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export default function LandingScreen() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F2F1'
    }
});
