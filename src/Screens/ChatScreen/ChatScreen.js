import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "../../components/Header";

const ChatScreen = ({ navigation }) => {
  //dummy messsages data
  const Messages = [
    {
      id: "1",
      userName: "Test",
      message: "Hello World",
      messageTime: "4 mins ago",
      userImg: require("../../../assets/images/profile.jpg"),
    },
    /* {
      id: "2",
      userName: "Abdul Hadi",
      message: "Arey Pathhar Laga re!",
      messageTime: "40 mins ago",
      userImg: require("../../../assets/images/profile.jpg"),
    },
    {
      id: "3",
      userName: "Mohammed Musharaf Khan",
      message: "Mai sogaya",
      messageTime: "14 mins ago",
      userImg: require("../../../assets/images/profile.jpg"),
    },
    {
      id: "4",
      userName: "Mohammed Muzaffar Khan",
      message: "Devloping RED App",
      messageTime: "14 mins ago",
      userImg: require("../../../assets/images/profile.jpg"),
    },
    {
      id: "5",
      userName: "Kamran",
      message: "Devloping RED App",
      messageTime: "14 mins ago",
      userImg: require("../../../assets/images/profile.jpg"),
    }, */
  ];

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Header label="Chats" navigation={navigation} />

      {Messages.length === 0 ? (
        <View style={styles.emptyInboxContainer}>
          <View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity>
                <Image source={require("../../../assets/images/empty.png")} />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: "InterMedium",
                fontSize: 24,
                color: "#000000",
                paddingTop: 30,
              }}
            >
              Your inbox is empty.
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontFamily: "Inter",
                lineHeight: 24,
                fontSize: 20,
                color: "#565656",
              }}
            >
              Once you start a new {"\n"}
              conversation,you’ll see it {"\n"}
              listed
              <Text style={{ color: "#002278", fontFamily: "Inter" }}>
                here.
              </Text>
            </Text>
          </View>
        </View>
      ) : (
        <View style={{ paddingBottom: 280 }}>
          <View style={{ paddingHorizontal: 40, paddingBottom: 20}}>
            <Text
              style={{ fontFamily: "InterMedium", fontSize: 20, alignItems: 'center', textAlign: 'center' }}
            >{`Under Development!`}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ccc",
              marginLeft: 20,
              marginRight: 20,
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 8,
              backgroundColor: "#D1EEFF",
              borderColor: "#0074B6",
            }}
          >
            <Ionicons name="search" size={20} style={{ marginRight: 10 }} />
            <TextInput
              style={{
                flex: 1,
              }}
              placeholder="Search Users"
            />
          </View>

          <FlatList
            horizontal={false}
            data={Messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ScrollView>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.chattingContainer}
                  onPress={() => {
                    navigation.navigate("Messages", { data: item });
                  }}
                >
                  <Image source={item.userImg} style={{ marginRight: 10 }} />
                  <View>
                    <Text
                      style={{
                        fontFamily: "Inter",
                        fontSize: 15,
                        color: "#000000",
                      }}
                    >
                      {item.userName}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Inter",
                        fontSize: 11,
                        color: "#766F6F",
                      }}
                    >
                      {item.message}
                    </Text>
                  </View>

                  <Text
                    style={{
                      marginLeft: "auto",
                      fontSize: 12,
                      color: "#CCC",
                      textAlign: "right",
                      top: -23,
                      paddingLeft: 0,
                    }}
                  >
                    {item.messageTime}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  emptyInboxContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 180,
  },
  chattingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 8,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
  },
});
