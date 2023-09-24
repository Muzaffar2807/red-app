import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddProperties from "../Screens/AddPropertiesScreen/AddProperties";
import FavouritesScreen from "../Screens/FavoritesScreen/FavouritesScreen";
import ChatScreen from "../Screens/ChatScreen/ChatScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import CustomDrawer from "../components/CustomDrawer";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawer {...props} navigation={navigation} />
      )}
      screenOptions={{
        drawerType: "front",
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home2" component={TabNavigator} />
      <Drawer.Screen name="Add Properties" component={AddProperties} />
      <Drawer.Screen name="Favourites" component={FavouritesScreen} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default AppStack;
