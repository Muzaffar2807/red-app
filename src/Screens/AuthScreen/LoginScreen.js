import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  TextInput,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import backgroundImg from "../../../assets/images/auth.jpeg";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import { useTogglePasswordVisibility } from "../../components/useTogglePasswordVisibility";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";

import { AuthContext } from "../../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { signin, IsLoading } = useContext(AuthContext);
 

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState("");

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      showsHorizontalScrollIndicator={false}
    >
      <ImageBackground
        source={backgroundImg}
        style={{
          height: Dimensions.get("window").height / 3.5,
          top: 30,
        }}
        imageStyle={{
          resizeMode: "cover", // cover works only here!
        }}
      >
        {/* Logo */}
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
          <View style={styles.container}>
            <Text style={styles.textLogo}>Real Estate {"\n"}Developer's.</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>

      {/* bottom */}

      <View style={[styles.bottomView, styles.shadowProp]}>
        <View style={{ padding: 40 }}>
          <Text
            style={{
              color: "#000B72",
              fontFamily: "InterMedium",
              fontSize: 25,
              paddingBottom: 4,
            }}
          >
            Welcome Back !
          </Text>
          <Text
            style={{
              fontFamily: "InterMedium",
              fontSize: 12,
              color: "#000000",
              paddingBottom: 50,
            }}
          >
            Sign in to continue
          </Text>

          {/* TextInputFields */}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              name="phone number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              keyboardType="numeric"
            />
            <Pressable>
              <MaterialCommunityIcons name="phone" size={22} color="#AAAAAA" />
            </Pressable>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              name="password"
              placeholder="Enter password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={passwordVisibility}
              enablesReturnKeyAutomatically
            />
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="#AAAAAA"
              />
            </Pressable>
          </View>

          {/* action buttons */}
          <View style={{ paddingTop: 40 }}>
            <TouchableOpacity
              onPress={() => {
                signin(phoneNumber, password);
              }}
              style={styles.actionButton}
            >
              {IsLoading === false ? (
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                    fontFamily: "InterMedium",
                  }}
                >
                  Log In
                </Text>
              ) : (
                <ActivityIndicator color="#fff"/>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={{ paddingTop: 10, paddingBottom: 50 }}
              onPress={() => navigation.navigate("forgetPassword")}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#766F6F",
                  fontFamily: "InterMedium",
                }}
              >
                Forget Password ?
              </Text>
            </TouchableOpacity>

            <View style={{ paddingTop: 50 }}>
              <Text style={{ fontFamily: "InterMedium", paddingBottom: 5 }}>
                Don't have an Account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                style={styles.singupBtn}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "InterMedium",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: "flex-end",
  },
  textLogo: {
    fontFamily: "MontserratBold",
    fontSize: 24,
    lineHeight: 30,
    paddingRight: 17,
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "#FFFFFF",

    borderTopStartRadius: 38,
    borderTopEndRadius: 38,

    height: "100%",
  },
  shadowProp: {
    shadowOffset: { width: 0, height: -5 },
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    elevation: 10, //android shadow
  },
  inputContainer: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderColor: "#000000",
  },
  inputField: {
    padding: 10,
    fontSize: 18,
    width: "90%",
    fontFamily: "InterMedium",
  },
  actionButton: {
    width: "100%",
    backgroundColor: "#000000",
    height: 50,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  singupBtn: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
