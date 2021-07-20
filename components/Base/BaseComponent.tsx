import * as React from "react";
import { View, Text } from "../../components/Theme/Themed";
import WithSafeAreaView from "../../components/WithSafeAreaView";
import { Alert, StyleSheet } from "react-native";
import BottomComponent from "../../components/Bottom/BottomComponent";
import { commonColor } from "../../constants/Colors";
import AudioContext from "../../contexts/AudioContext";
import { useState, useContext, useEffect } from "react";
import { DataProvider } from "recyclerlistview";
import * as MediaLibrary from 'expo-media-library';

interface IProps {
    height?: number;
    play?: boolean;
    children: any;
}

export default function BaseComponent(props: IProps) {
    return (
        <WithSafeAreaView loading={false}>
            <View style={styles.container}>
                {props.children}
            </View>
            <BottomComponent
                play={true}
            />
        </WithSafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonColor.main,
        overflow: 'hidden'
    }
});