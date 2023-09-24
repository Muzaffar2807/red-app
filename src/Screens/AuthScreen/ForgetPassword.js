import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import Ionicons from "react-native-vector-icons/Ionicons";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";

const ForgetPassword = ({ navigation }) => {
  //custom font
  let [loaded] = useFonts({
    PoppinsRegular: require("../../../assets/fonts/Montserrat/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  //custom font
  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View style={styles.mainWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} />
          </TouchableOpacity>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 23,
            }}
          >
            <Image
              source={require("../../../assets/images/forgot-password.png")}
              style={{ width: 400, height: 279 }}
            />
          </View>
          <View style={{ marginTop: 22 }}>
            <Text
              style={{
                fontFamily: "InterMedium",
                fontSize: 27,
                color: "#000B72",
                lineHeight: 32,
              }}
            >
              Forgot {"\n"}Password ?
            </Text>

            <View style={{ paddingLeft: 0, paddingRight: 30 }}>
              <Text
                style={{
                  fontFamily: "PoppinsRegular",
                  fontSize: 16,
                  marginTop: 20,
                  lineHeight: 24,
                }}
              >
                Don’t worry ! It happens, Please enter the Mobile Number
                associated with your Account
              </Text>
              <View style={{ marginTop: 15 }}>
                <TextInput
                  placeholder="Enter Mobile Number"
                  placeholderTextColor="#766F6F"
                  keyboardType="numeric"
                  style={{
                    fontSize: 17,
                    borderBottomWidth: 1,
                    width: 280,
                    paddingBottom: 8,
                  }}
                />
                <TouchableOpacity>
                  <View
                    style={{
                      marginTop: 52,
                      backgroundColor: "#000000",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 289,
                      borderRadius: 10,
                      paddingVertical: 10,
                      justifyContent: 'center',
                      marginLeft: 10
                    }}
                  >
                    <Text style={{ color: "#FFFFFF", fontSize: 18,}}>Next</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
});
