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
import React, { useState } from "react";
import backgroundImg from "../../../assets/images/auth.jpeg";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import { Feather } from "@expo/vector-icons";

const PhoneAuth = ({ navigation }) => {
  const [phone, setPhone] = useState("");

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
            Enter Your Mobile Number
          </Text>
          <Text
            style={{
              fontFamily: "InterMedium",
              fontSize: 12,
              color: "#000000",
              paddingBottom: 50,
            }}
          >
            We will send you a confirmation code
          </Text>

          {/* TextInputFields */}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              name="phone"
              placeholder="Mobile Number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              keyboardType="numeric"
            />
            <Pressable>
              <Feather name="phone" size={22} color="#AAAAAA" />
            </Pressable>
          </View>

          {/* action buttons */}
          <View style={{ paddingTop: 40 }}>
            <TouchableOpacity style={styles.actionButton}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontFamily: "InterMedium",
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PhoneAuth;

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
