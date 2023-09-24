import { View, Text, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "../context/AuthContext";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { ActivityIndicator } from "react-native-paper";

const Loading = () => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <ActivityIndicator size="large" color="#000000" />
  </View>
);

const AppNav = () => {
  const { userToken } = useContext(AuthContext);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    setAppLoading(false);
  }, [userToken]);

  if (appLoading) {
    return (
      <NavigationContainer>
        <Loading />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
     {/*  {userToken !== null ? <AppStack /> : <AuthStack />} */}
     <AppStack />
    </NavigationContainer>
  );
};

export default AppNav;
