import {
  KeyboardAvoidingView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import Ionicons from "react-native-vector-icons/Ionicons";
//import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { height } = Dimensions.get("window");

const Messages = ({ navigation, route }) => {
  //console.log(route.params?.data.userImg);

  //For Keyboard lifting up while typing

  const { data } = route.params;

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Under Development!!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 5, marginRight: 5 }}
            size={42}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#2e64e5",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  return (
    <SafeAreaView
      style={[SafeViewAndroid.AndroidSafeArea, { backgroundColor: "#FFFFFF" }]}
    >
      <KeyboardAvoidingView>
        <View style={styles.mainWrapper}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              borderRadius: 38,
              paddingHorizontal: 30,
              marginTop: 15,
            }}
          >
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>

            <Image source={data.userImg} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontFamily: "InterMedium", fontSize: 17 }}>
                {data?.userName}
              </Text>
              <Text style={{ fontFamily: "Inter", fontSize: 12 }}>Owner</Text>
            </View>
          </View>
          {/* <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{ _id: 1 }}
            isAnimated
            scrollToBottom
            keyboardShouldPersistTaps="always"
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottomComponent={scrollToBottomComponent}
             
          /> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 5,
    height: "100%", 
  },
   
});
