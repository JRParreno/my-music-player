/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { LandingParamList } from '../types';
import LandingScreen from '../screens/Landing/LandingScreen';

const LandingStack = createStackNavigator<LandingParamList>();

export default function LandingAuthNavigator() {
    return (
        <LandingStack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
            <LandingStack.Screen
                name="Landing"
                component={LandingNavigator}
            />
        </LandingStack.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
function LandingNavigator() {
    return (
        <LandingScreen />
    );
}