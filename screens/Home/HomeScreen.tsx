import * as React from "react";
import { View, Text } from "../../components/Theme/Themed";
import WithSafeAreaView from "../../components/WithSafeAreaView";
import { StyleSheet } from "react-native";
import BottomComponent from "../../components/Bottom/BottomComponent";
import { commonColor } from "../../constants/Colors";
import BaseComponent from "../../components/Base/BaseComponent";
import SearchBar from "../../components/HomeComponents/SearchBar";
import MusicList from "../../components/HomeComponents/MusicList";

export default function HomeScreen() {

    return (
        <BaseComponent play={true}>
            <SearchBar />
            <MusicList />
        </BaseComponent>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonColor.main
    }
});