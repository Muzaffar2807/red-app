import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = ({ label, navigation }) => {

  const { userInfo } = useContext(AuthContext);

  const userImage = userInfo?.user.Photo;
 
  //custom font
  let [loaded] = useFonts({
    MontserratBold: require("../../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    MontserratLight: require("../../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    InterMedium: require("../../assets/fonts/Montserrat/Inter-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  //custom font
  return (
    <View
      style={
        label == "Real Estate Developer's"
          ? {
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-between",
              padding: 20,
              paddingTop: 0
              //paddingTop: 10,
            }
          : {
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
             // paddingTop: 10,
             paddingTop: 0,
              /* textAlign: "center", */
              justifyContent: "space-between",
            }
      }
    >
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Ionicons name="menu-outline" size={35} color="#000000" />
      </TouchableOpacity>

      <Text
        style={
          label !== "Real Estate Developer's"
            ? {
                fontFamily: "InterMedium",
                fontSize: 18,
                color: "#816C6C",
                /* paddingLeft: 100, */
              }
            : {
                fontFamily: "InterMedium",
                fontSize: 18,
                color: "#816C6C",
                /*  paddingLeft: 15, */
              }
        }
      >
        {label}
      </Text>

      <View
        style={
          label !== "Real Estate Developer's"
            ? { display: "none" }
            : { flexDirection: "row", alignItems: "center" }
        }
      >
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#000000" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={{ paddingLeft: 8 }}
        >
          <View>
            <Image
              source={{ uri: userImage }}
              style={{
                height: 38,
                width: 38,
                borderRadius: 40,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={
          label == "Real Estate Developer's"
            ? { display: "none" }
            : { flexDirection: "row", alignItems: "center" }
        }
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={{ paddingLeft: 8 }}
        >
          <View>
            <Image
              source={{ uri: userImage }}
              style={{
                height: 38,
                width: 38,
                borderRadius: 40,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
