import * as React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import WithSafeAreaView from "../../components/WithSafeAreaView";
import LottieView from 'lottie-react-native';
import LandingButton from "../../components/Buttons/LandingButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


export default function LoginScreen() {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(false);


    const handleOnPress = () => {
        Alert.alert('you press');
    }

    return (
        <WithSafeAreaView loading={false}>
            <View style={styles.outerContainer}>
                <View style={styles.lottieContainer}>
                    <LottieView style={{ flex: 1, }} source={require("../../assets/lottiefiles/38435-register.json")} autoPlay loop />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>Enterprise Team Collaboration.</Text>
                    <Text style={styles.contentText}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <LandingButton
                        title={'Register'}
                        onPress={() => {
                            setSelected(false)
                        }}
                        color={selected ? 'white' : '#3B3A41'}
                        background={selected ? '#3B3A41' : 'white'}
                    />
                    <LandingButton
                        title={'Login'}
                        onPress={() => {
                            setSelected(true);
                            navigation.navigate('Landing');
                        }}
                        background={selected ? 'white' : '#3B3A41'}
                        color={selected ? '#3B3A41' : 'white'}
                    />
                </View>
            </View>
        </WithSafeAreaView>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    lottieContainer: {
        flex: 1,
        backgroundColor: 'black'
    },
    textContainer: {
        flex: 1.75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingHorizontal: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 40,
        fontFamily: 'poppins-semibold',
        textAlign: 'center',
        marginBottom: 15
    },
    contentText: {
        color: '#878787',
        fontSize: 15,
        fontFamily: 'poppins-regular',
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 0.25,
        flexDirection: 'row',
        marginHorizontal: 25,
        marginVertical: 10,
        borderRadius: 15,
        backgroundColor: '#3B3A41',
        overflow: 'hidden'
    }

})