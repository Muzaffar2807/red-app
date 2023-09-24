import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";
import { AuthContext } from "../../context/AuthContext";

const EditProfile = ({ navigation }) => {

  const { userInfo } = useContext(AuthContext);

  const userImage = userInfo?.user.Photo

  //edit name
  const [newName, setNewName] = useState("");

  //edit email
  const [newEmail, setNewEmail] = useState("");

  //edit location
  const [newLocation, setNewLocation] = useState("");
  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView
        style={[
          SafeViewAndroid.AndroidSafeArea,
          { backgroundColor: "#FFFFFF", height: "100%" },
        ]}
      >
        <View style={styles.mainWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={styles.header}>
              <Ionicons name="close-outline" size={28} color="#000000" />
              <Text style={{ fontFamily: "InterBold", fontSize: 21 }}>
                Edit Profile
              </Text>
              <Text>        </Text>
            </View>
          </TouchableOpacity>

          <ScrollView>
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <View>
                <TouchableOpacity activeOpacity={0.6}>
                  <Image
                    source={{ uri: userImage }}
                    style={{ width: 100, height: 100, borderRadius: 48 }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 3,
                      right: 8,
                      backgroundColor: "#fff",
                      width: 27,
                      height: 27,
                      borderRadius: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      elevation: 5,
                      shadowOffset: { width: 4, height: 0 },
                      shadowColor: "#000000",
                      shadowOpacity: 0.5,
                    }}
                  >
                    <Ionicons name="pencil-outline" size={16} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginTop: 30 }}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Enter new name"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Phone Number</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholder="+91"
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>E-mail Address</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Enter new email"
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Location</Text>
                <TextInput style={styles.inputBox} placeholder="Set location" />
              </View>
            </View>

            <View style={{ alignItems: "center", marginTop: 40 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#000000",
                  width: 145,
                  height: 45,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 13,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    fontFamily: "InterMedium",
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainWrapper: {
    paddingHorizontal: 40,
     
  },
  inputLabel: {
    fontSize: 20,
    fontFamily: "InterMedium",
    color: "#000000",
  },
  inputBox: {
    borderWidth: 1,
    height: 50,
    borderRadius: 6,
    marginTop: 5,
    fontSize: 16,
    paddingLeft: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
});
