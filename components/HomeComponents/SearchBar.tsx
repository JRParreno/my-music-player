import * as React from "react";
import { View } from "../../components/Theme/Themed";
import { StyleSheet } from "react-native";
import { commonColor } from "../../constants/Colors";
import TextField from "../TextField";
import { useState } from "react";


export default function SearchBar() {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
            <TextField
                value={text}
                iconColor={{ color: commonColor.miniPlayer }}
                iconLeftName={'search-outline'}
                iconVisible={true}
                autofocus={false}
                placeholder={'search music..'}
                style={{ paddingVertical: 7, paddingHorizontal: 5 }}
                onChange={setText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: commonColor.main,
        paddingHorizontal: 20,
        marginBottom: 15,
    }
});