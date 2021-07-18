import * as React from "react";
import { View, Text } from "../../components/Theme/Themed";
import WithSafeAreaView from "../../components/WithSafeAreaView";
import { StyleSheet } from "react-native";
import BottomComponent from "../../components/Bottom/BottomComponent";

export default function HomeScreen() {

    return (
        <WithSafeAreaView loading={false}>
            <View style={styles.container}>
                <Text>
                    Welcome!
                </Text>

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
        borderWidth: 1,
        borderColor: 'red'
    }
});