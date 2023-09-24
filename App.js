import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./src/context/AuthContext";
import { AppProvider } from "./src/context/AppContext";
import AppNav from "./src/Navigation/AppNav";
import { ToastProvider } from "react-native-styled-toast";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <ToastProvider>
          <AppNav />
        </ToastProvider>
      </AppProvider>
    </AuthProvider>
  );
}
