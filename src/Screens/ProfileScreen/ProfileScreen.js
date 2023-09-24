import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
  Pressable,
  ScrollView,
} from "react-native";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfileScreen = ({ navigation }) => {

  const { userInfo } = useContext(AuthContext);

  const userImage = userInfo?.user.Photo

   


  //toggle Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView
      style={[
        SafeViewAndroid.AndroidSafeArea,
        { backgroundColor: "#FFFFFF", height: "100%", paddingTop: 35, },
      ]}
    >
      <View style={styles.profileViewHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color="#000000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 21, fontFamily: "InterBold" }}>Profile</Text>

        <View>
          <Text>       </Text>
        </View>
      </View>

      <View
        style={{ alignItems: "center", paddingHorizontal: 40, marginTop: 60 }}
      >
        <View
          style={{ borderWidth: 5, borderRadius: 58, borderColor: "#5A4683" }}
        >
          <Image
            source={{ uri: userImage}}
            style={{ width: 93, height: 93, borderRadius: 58 }}
          />
        </View>

        <Text
          style={{
            fontFamily: "InterMedium",
            fontSize: 24,
            color: "#000000",
            paddingTop: 12,
            textTransform: 'capitalize'
          }}
        >
          {userInfo?.user.Name}
        </Text>
        <Text style={{ fontFamily: "PoppinsMedium", color: "#736F84" }}>
          {userInfo?.user.Email}
        </Text>
      </View>

      <ScrollView style={{ flexDirection: "column", paddingHorizontal: 40 }}>
        <Pressable onPress={() => {}} style={{ marginTop: 50 }}>
          <View style={styles.profileChilds}>
            <Ionicons name="notifications" size={25} />
            <Text style={styles.profilechildText}>Notification</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ marginLeft: "auto" }}
            />
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("Privacy Policy");
          }}
        >
          <View style={styles.profileChilds}>
            <Ionicons name="clipboard-outline" size={25} />
            <Text style={styles.profilechildText}>Privacy Policy</Text>
            <Ionicons
              name="arrow-forward"
              style={{ marginLeft: "auto" }}
              size={25}
            />
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("Edit Profile");
          }}
        >
          <View style={styles.profileChilds}>
            <Ionicons name="person-outline" size={25} />
            <Text style={styles.profilechildText}>Edit Profile</Text>
            <Ionicons
              name="arrow-forward"
              style={{ marginLeft: "auto" }}
              size={25}
            />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileViewHeader: {
    paddingHorizontal: 40,
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileChilds: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  profilechildText: {
    fontSize: 20,
    fontFamily: "Inter",
    paddingLeft: 30,
    color: "#1F215D",
  },
});
