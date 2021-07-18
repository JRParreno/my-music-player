import * as React from "react";
import { View, Text } from "../../components/Theme/Themed";
import WithSafeAreaView from "../../components/WithSafeAreaView";
import { StyleSheet } from "react-native";
import BottomComponent from "../../components/Bottom/BottomComponent";
import { commonColor } from "../../constants/Colors";

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