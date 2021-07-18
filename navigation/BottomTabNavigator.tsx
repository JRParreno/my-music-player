// /**
//  * Learn more about createBottomTabNavigator:
//  * https://reactnavigation.org/docs/bottom-tab-navigator
//  */
//
// import { Ionicons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import * as React from 'react';
//
// import Colors, { commonColor } from '../constants/Colors';
// import useColorScheme from '../hooks/useColorScheme';
// import TabOneScreen from '../screens/TabOneScreen';
// import AddDeviceScreen from '../screens/Device/AddDeviceScreen';
// import AddDeviceScreenRevamp from '../screens/Device/AddDeviceScreenRevamp';
// import { BottomTabParamList, TabOneParamList, AddDeviceParamList, MomentsParamList, SchedulesParamList, ProfileParamList } from '../types';
// import EstablishmentsScreen from "../screens/Establishment/EstablishmentsScreen";
// import AddEstablishmentScreen from "../screens/Establishment/AddEstablishmentScreen";
// import AreasScreen from "../screens/Area/AreasScreen";
// import DevicesScreen from "../screens/Device/DevicesScreen";
// import ActionsScreen from "../screens/ActionsScreen";
// import AddAreaScreen from "../screens/Area/AddAreaScreen";
// import { PixelRatio, StyleSheet, View } from "react-native";
// import MomentsScreen from '../screens/Moment/Moments';
// import AddMomentsScreen from '../screens/AddMomentScreen';
// import AddScheduleDevicesScreen from '../screens/AddDeviceSchedule';
// import ProfileScreen from '../screens/Profile/ProfileScreen';
// import SchedulesScreen from '../screens/SchedulesScreen';
// import AddScheduleScreen from '../screens/AddSceduleScreen';
// import FullNameScreen from '../screens/Profile/FullNameScreen';
// import EmailAddressScreen from '../screens/Profile/EmailAddressScreen';
// import PasswordScreen from '../screens/Profile/PasswordScreen';
//
// // tab icons
// import HomeIcon from '../components/SVG/bottom-nav-icons/HomeIcon';
// import SettingIcon from '../components/SVG/bottom-nav-icons/SettingIcon';
// import ScheduleIcon from '../components/SVG/bottom-nav-icons/ScheduleIcon';
// import MomentIcon from '../components/SVG/bottom-nav-icons/MomentIcon';
//
// const BottomTab = createBottomTabNavigator<BottomTabParamList>();
//
// export default function BottomTabNavigator() {
//     const colorScheme = useColorScheme();
//     return (
//         <BottomTab.Navigator
//             initialRouteName="Home"
//             tabBarOptions={{
//                 activeTintColor: '#53287f', showLabel: true, keyboardHidesTabBar: true,
//                 style: {
//                     display: "flex",
//                     height: PixelRatio.getPixelSizeForLayoutSize(25),
//                     position: "relative",
//                     borderTopColor: "white",
//                     backgroundColor: "#ffffff",
//                     elevation: 0,
//                 },
//                 labelStyle: {
//                     fontFamily: "poppins-regular",
//                 }
//             }}
//
//         >
//             <BottomTab.Screen
//                 name="Home"
//                 component={AddDeviceNavigator}
//                 options={{
//                     tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
//
//                 }}
//             />
//             <BottomTab.Screen
//                 name="Schedule"
//                 component={SchedulesNavigator}
//                 options={{
//                     tabBarIcon: ({ color }) => <ScheduleIcon size={24} color={color} />,
//                 }}
//             />
//             <BottomTab.Screen
//                 name="Moments"
//                 component={MomentsNavigator}
//                 options={{
//                     tabBarIcon: ({ color }) => <MomentIcon size={24} color={color} />,
//                 }}
//             />
//             <BottomTab.Screen
//                 name="Profile"
//                 component={ProfileNavigator}
//                 options={{
//                     tabBarIcon: ({ color }) => <SettingIcon size={24} color={color} />,
//                 }}
//             />
//         </BottomTab.Navigator>
//
//
//     );
// }
//
// // You can explore the built-in icon families and icons on the web at:
// // https://icons.expo.fyi/
// function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
//     // return <Ionicons size={25} style={{ marginBottom: -3, padding: 8, backgroundColor: commonColor.main, borderRadius: 10 }} {...props} />;
//     return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
// }
//
// // Each tab has its own navigation stack, you can read more about this pattern here:
// // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
// const TabOneStack = createStackNavigator<TabOneParamList>();
//
// function TabOneNavigator() {
//     return (
//         <TabOneStack.Navigator screenOptions={{ headerShown: false }}>
//             <TabOneStack.Screen
//                 name="TabOneScreen"
//                 component={TabOneScreen}
//                 options={{ headerTitle: 'Settings' }}
//             />
//         </TabOneStack.Navigator>
//     );
// }
//
//
// const ProfileStatck = createStackNavigator<ProfileParamList>();
//
// function ProfileNavigator() {
//     return (
//         <ProfileStatck.Navigator screenOptions={{ headerShown: false }}>
//             <ProfileStatck.Screen
//                 name="ProfileScreen"
//                 component={ProfileScreen}
//                 options={{ headerTitle: 'Profile' }}
//             />
//
//             <ProfileStatck.Screen
//                 name="FullNameScreen"
//                 component={FullNameScreen}
//                 options={{ headerTitle: 'Update Full Name' }}
//             />
//
//             <ProfileStatck.Screen
//                 name="EmailAddressScreen"
//                 component={EmailAddressScreen}
//                 options={{ headerTitle: 'Update Email Address' }}
//             />
//
//             <ProfileStatck.Screen
//                 name="PasswordScreen"
//                 component={PasswordScreen}
//                 options={{ headerTitle: 'Update Password' }}
//             />
//         </ProfileStatck.Navigator>
//
//     );
// }
//
// const SchedulesStack = createStackNavigator<SchedulesParamList>();
//
// function SchedulesNavigator() {
//     return (
//         <SchedulesStack.Navigator screenOptions={{ headerShown: false }}>
//             <SchedulesStack.Screen
//                 name="SchedulesScreen"
//                 component={SchedulesScreen}
//                 options={{ headerTitle: "Schedules" }}
//             />
//
//             <SchedulesStack.Screen
//                 name="AddScheduleScreen"
//                 component={AddScheduleScreen}
//                 options={{ headerTitle: 'Add Schedule' }}
//             />
//         </SchedulesStack.Navigator>
//
//     )
// }
//
// const MomentsStack = createStackNavigator<MomentsParamList>();
//
// function MomentsNavigator() {
//     return (
//         <MomentsStack.Navigator screenOptions={{ headerShown: false }}>
//             <MomentsStack.Screen
//                 name="MomentsScreen"
//                 component={MomentsScreen}
//                 options={{ headerTitle: "Moments" }}
//             />
//             <MomentsStack.Screen
//                 name="AddMomentsScreen"
//                 component={AddMomentsScreen}
//                 options={{ headerTitle: "Add Moments" }}
//             />
//         </MomentsStack.Navigator>
//
//     )
// }
//
// const AddDeviceStack = createStackNavigator<AddDeviceParamList>();
//
// function AddDeviceNavigator() {
//     return (
//         <AddDeviceStack.Navigator screenOptions={{ headerShown: false }}>
//             <AddDeviceStack.Screen
//                 name="EstablishmentsScreen"
//                 component={EstablishmentsScreen}
//                 options={{ headerTitle: 'Establishments' }}
//             />
//             <AddDeviceStack.Screen
//                 name="AreasScreen"
//                 component={AreasScreen}
//                 options={({ route }) => ({ headerTitle: route.params.establishment.name })}
//             />
//             <AddDeviceStack.Screen
//                 name="DevicesScreen"
//                 component={DevicesScreen}
//                 options={({ route }) => ({ headerTitle: route.params.area.name })}
//             />
//             <AddDeviceStack.Screen
//                 name="AddScheduleDevicesScreen"
//                 component={AddScheduleDevicesScreen}
//                 options={({ route }) => ({ headerTitle: 'Add Schedule' })}
//             />
//             <AddDeviceStack.Screen
//                 name="ActionsScreen"
//                 component={ActionsScreen}
//                 options={({ route }) => ({ headerTitle: route.params.device.name })}
//             />
//             <AddDeviceStack.Screen
//                 name="AddDeviceScreen"
//                 component={AddDeviceScreen}
//                 options={({ route }) => ({ headerTitle: `Add ${route.params.area.name} Device` })}
//             />
//             <AddDeviceStack.Screen
//                 name="AddDeviceScreenRevamp"
//                 component={AddDeviceScreenRevamp}
//                 options={({ route }) => ({ headerTitle: `Add ${route.params.area.name} Device` })}
//             />
//             <AddDeviceStack.Screen
//                 name="AddEstablishmentScreen"
//                 component={AddEstablishmentScreen}
//                 options={{ headerTitle: 'Add Establishment' }}
//             />
//             <AddDeviceStack.Screen
//                 name="AddAreaScreen"
//                 component={AddAreaScreen}
//                 options={{ headerTitle: 'Add Area' }}
//             />
//         </AddDeviceStack.Navigator>
//     );
// }
