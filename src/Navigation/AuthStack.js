import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../Screens/AuthScreen/OnboardingScreen";
import LoginScreen from "../Screens/AuthScreen/LoginScreen";
import RegisterScreen from "../Screens/AuthScreen/RegisterScreen";
import PhoneAuth from "../Screens/AuthScreen/PhoneAuth";
import ForgetPassword from "../Screens/AuthScreen/ForgetPassword";

const Stack = createNativeStackNavigator();

const AuthStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={OnboardingScreen} name="Onboarding" />

      <Stack.Screen component={LoginScreen} name="Login" />

      <Stack.Screen component={RegisterScreen} name="Register" />

      <Stack.Screen component={PhoneAuth} name="phoneAuth" />

      <Stack.Screen component={ForgetPassword} name="forgetPassword" />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
