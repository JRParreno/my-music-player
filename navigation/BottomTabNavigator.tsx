/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors, { commonColor } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, HomeParamList } from '../types';
import { PixelRatio, StyleSheet, View } from "react-native";
import HomeScreen from '../screens/Home/HomeScreen';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#53287f', showLabel: false, keyboardHidesTabBar: true,
                style: {
                    height: PixelRatio.getPixelSizeForLayoutSize(30),
                    borderRadius: 50,
                    elevation: 0,
                    position: 'absolute',
                    backgroundColor: commonColor.main,
                    bottom: 20,
                    left: 20,
                    right: 20,
                    ...styles
                },
                labelStyle: {
                    fontFamily: "poppins-regular",
                }
            }}

        >
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name='headset-outline' color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Heart"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name='heart-outline' color={color} />,


                }}
            />
            <BottomTab.Screen
                name="Playlist"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name='play-circle-outline' color={color} />,

                }}
            />
            <BottomTab.Screen
                name="Settings"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name='settings-outline' color={color} />,

                }}
            />

        </BottomTab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    // return <Ionicons size={25} style={{ marginBottom: -3, padding: 8, backgroundColor: commonColor.main, borderRadius: 10 }} {...props} />;
    return <Ionicons size={25} style={{ borderWidth: 1, borderColor: commonColor.main }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const MusicStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
    return (
        <MusicStack.Navigator screenOptions={{ headerShown: false }}>
            <MusicStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerTitle: 'Profile' }}
            />

        </MusicStack.Navigator>

    );
}
