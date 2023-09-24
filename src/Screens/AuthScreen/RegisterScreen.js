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
import React, { useState, useContext } from "react";
import backgroundImg from "../../../assets/images/auth.jpeg";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import { useTogglePasswordVisibility } from "../../components/useTogglePasswordVisibility";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";
import { AuthContext } from "../../context/AuthContext";
import { ActivityIndicator } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as Camera from "expo-camera";

const RegisterScreen = ({ navigation }) => {
  const { signup, IsLoading } = useContext(AuthContext);

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();
  const [photo, setPhoto] = useState("")

  //selecting from phone media
  const selectImage = async () => {
    try {
      const cameraRollPermission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (cameraRollPermission.granted) {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        if (cameraPermission.granted) {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: false,
          });
          console.log(result.selected);
          if (result.selected) {
            setPhoto([...photo, ...result.selected]);
          } else {
            setPhoto([...photo, result]);
          }
          if (result.cancelled) {
            setSetActionButton(false);
          }
        }
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingWrapper>
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
              <Text style={styles.textLogo}>
                Real Estate {"\n"}Developer's.
              </Text>
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
              Create an account
            </Text>
            <Text
              style={{
                fontFamily: "InterMedium",
                fontSize: 12,
                color: "#000000",
                paddingBottom: 50,
              }}
            >
              Start your dream with us!
            </Text>

            {/* TextInputFields */}

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                name="email"
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
                keyboardType="email-address"
              />
              <Pressable>
                <Ionicons name="person-outline" size={22} color="#AAAAAA" />
              </Pressable>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                name="email"
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
              />
              <Pressable>
                <MaterialCommunityIcons
                  name="email"
                  size={22}
                  color="#AAAAAA"
                />
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

            {/* <TouchableOpacity onPress={() => selectImage()}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                  justifyContent: "center",
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                  borderStyle: "dotted",
                  borderRadius: 15,
                  borderColor: "#000000",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "InterMedium",
                    fontSize: 17,
                    color: "#1F215D",
                    paddingRight: 26,
                  }}
                >
                  Upload Profile
                </Text>
                <Ionicons
                  name="cloud-upload-outline"
                  size={24}
                  color="#1F215D"
                />
              </View>
            </TouchableOpacity> */}

            {/* action buttons */}
            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
                onPress={() => {
                  signup(name, email, password, phone, photo);
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
                    Sign up
                  </Text>
                ) : (
                  <ActivityIndicator color="#fff" size={22} />
                )}
              </TouchableOpacity>

              <View style={{ paddingTop: 30 }}>
                {/*  <TouchableOpacity onPress={() => {navigation.navigate("phoneAuth")}}>
                <Text
                  style={{
                    fontFamily: "MontserratBold",
                    fontSize: 18,
                    textAlign: "center",
                    color: "#000B72",
                  }}
                >
                  Register with Phone Number
                </Text>
              </TouchableOpacity> */}
              </View>

              <View
                style={{
                  paddingTop: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "InterMedium",
                    fontSize: 12,
                    color: "#766F6F",
                  }}
                >
                  Already have an Account?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                  style={styles.singupBtn}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "InterMedium",
                    }}
                  >
                    LogIn
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingWrapper>
  );
};

export default RegisterScreen;

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
    width: "50%",
    height: 50,
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
