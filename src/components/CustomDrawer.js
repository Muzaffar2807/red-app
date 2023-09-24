import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
  Share,
} from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const CustomDrawer = ({ props, navigation }) => {
  const { userInfo, logout } = useContext(AuthContext);

  const userImage = userInfo?.user.Photo;

  //custom font
  let [loaded] = useFonts({
    MontserratBold: require("../../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    MontserratLight: require("../../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    InterBold: require("../../assets/fonts/Montserrat/Inter-Bold.ttf"),
    InterMedium: require("../../assets/fonts/Montserrat/Inter-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  //custom font

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
        {...props}
      >
        <ImageBackground
          source={require("../../assets/images/menu-bg.jpeg")}
          style={{ padding: 80, paddingLeft: 15, paddingBottom: 15 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Image
                source={{ uri: userImage }}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 40,
                  marginBottom: 10,
                }}
              />
            </TouchableOpacity>

            <View>
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 16,
                  paddingLeft: 10,
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                {userInfo?.user.Name}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 8,
                  paddingTop: 4,
                }}
              >
                <Ionicons name="location-outline" color="#FFFFFF" size={14} />
                <Text
                  style={{
                    color: "#FFF",
                    fontSize: 12,
                  }}
                >
                  Sangareddy, Telangana
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={{
              padding: 8,
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              margin: 5,
            }}
          >
            <Ionicons name="home-outline" size={21} />
            <Text
              style={{ marginLeft: 8, fontSize: 16, fontFamily: "InterMedium" }}
            >
              Home
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Add Properties2")}
            style={{
              padding: 8,
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              margin: 5,
            }}
          >
            <Ionicons name="add-circle-outline" size={22} />
            <Text
              style={{ marginLeft: 8, fontSize: 16, fontFamily: "InterMedium" }}
            >
              Add Properties
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Favorities")}
            style={{
              padding: 8,
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              margin: 5,
            }}
          >
            <Ionicons name="heart-outline" size={21} />
            <Text
              style={{ marginLeft: 8, fontSize: 16, fontFamily: "InterMedium" }}
            >
              Favorities
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Chat Stack")}
            style={{
              padding: 8,
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              margin: 5,
            }}
          >
            <Ionicons name="chatbox-outline" size={21} />
            <Text
              style={{ marginLeft: 8, fontSize: 16, fontFamily: "InterMedium" }}
            >
              Chat
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Profile")}
            style={{
              padding: 8,
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              margin: 5,
            }}
          >
            <Ionicons name="person-outline" size={22} />
            <Text
              style={{ marginLeft: 8, fontSize: 16, fontFamily: "InterMedium" }}
            >
              Profile
            </Text>
          </Pressable>
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social" size={22} color="#000000" />
            <Text
              style={{
                fontSize: 16,
                marginLeft: 5,
                fontFamily: "InterBold",
              }}
            >
              Share App
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{ paddingVertical: 12 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{ fontSize: 16, marginLeft: 5, fontFamily: "InterMedium" }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
