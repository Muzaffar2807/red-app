import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import backgroundImg from "../../../assets/splash.jpeg";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/AntDesign";

const OnboardingScreen = ({ navigation }) => {
  //custom font

  let [loaded] = useFonts({ 
    'MontserratBold': require("../../../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    'MontserratLight': require("../../../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    'InterMedium' : require("../../../assets/fonts/Montserrat/Inter-Medium.ttf"),
    'InterBold' : require('../../../assets/fonts/Montserrat/Inter-Bold.ttf'),
    'PoppinsMedium' : require('../../../assets/fonts/Montserrat/Poppins-Medium.ttf'),
  });
  if (!loaded) {
    return null;
  }
  //custom font

  return (
    <ImageBackground
      source={backgroundImg}
      style={{ flex: 1, width: "100%", height: "100%" }}
      imageStyle={{
        resizeMode: "cover", // works only here!
      }}
    >
     {/*  <StatusBar translucent backgroundColor="#bbd1df" /> */}
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {/* Heading Text */}
        <View style={styles.container}>
          <Text style={styles.textLogo}>Real Estate {"\n"}Developer's.</Text>
        </View>

        {/* Signin/Signup Buttons */}
        <View style={{ paddingBottom: 80 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              width: "70%",
              alignItems: "center",
              height: 46,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "#000000",
              marginLeft: 53,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={{
                flex: 1,
                borderRadius: 25,
                justifyContent: "space-evenly",
                alignItems: "center",
                borderWidth: 0.5,
                height: 46,
                backgroundColor: "#000000",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontFamily: "MontserratLight",
                }}
              >
                SignIn
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
              style={{
                flex: 1,
                borderRadius: 10,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "MontserratLight",
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>

          {/* Skip for now */}
          <View style={{ marginLeft: 53 }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  textDecorationLine: "underline",
                  marginTop: 12,
                  paddingRight: 4,
                  fontFamily: "MontserratBold", 
                }}
              >
                Skip For Now <Icon name="doubleright" size={13} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
  },
  textLogo: {
    fontFamily: "MontserratBold",
    fontSize: 24,
    lineHeight: 30,
    paddingRight: 57,
  },
});
