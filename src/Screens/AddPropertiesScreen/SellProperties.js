import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext } from "react";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RadioButton } from "react-native-paper";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";
import * as Location from "expo-location";
import { AuthContext } from "../../context/AuthContext";

const SellProperties = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);

  const [sellOrBuy, setSellOrBuy] = useState("Sell");
  const [propertiesType, setPropertiesType] = useState("Residential");
  const [selectCategory, setSelectCategory] = useState("Buildings");
  const [propertyValue, setPropertyValue] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [proeprtyAddress, setPropertyAddress] = useState("");
  const [location, setLocation] = useState("");
  const User = userInfo.user._id;

  const [loading, setLoading] = useState(false);

  //Validation states
  const [propertyValueValid, setPropertyValueValid] = useState(true);
  const [propertyAddressValid, setPropertyAddressValid] = useState(true);
  const [propertyDescriptionValid, setPropertyDescriptionValid] =
    useState(true);
  const [propertyLocationValid, setPropertyLocationValid] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  //Validation Function next button
  const validateInputs = () => {
    // Validation function
    if (propertyValue === "") {
      setPropertyValueValid(false);
    } else {
      setPropertyValueValid(true);
    }
    if (proeprtyAddress === "") {
      setPropertyAddressValid(false);
    } else {
      setPropertyAddressValid(true);
    }
    if (propertyDescription === "") {
      setPropertyDescriptionValid(false);
    } else {
      setPropertyDescriptionValid(true);
    }
    if (location === "") {
      setPropertyLocationValid(false);
    } else {
      setPropertyLocationValid(true);
    }

    // Check if any of the fields are empty
    if (
      propertyValue === "" ||
      proeprtyAddress === "" ||
      propertyDescription === "" ||
      location === ""
    ) {
      setModalVisible(true);
      return;
    } else {
      setModalVisible(false);
      navigation.navigate("Sell Properties Next", {
        addPropertyDetials,
      });
    }
  };

  //Getting the Current Loaction from User
  const getCurrentCity = async () => {
    setLoading(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission Denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const addressCity = await Location.reverseGeocodeAsync(location.coords);
    const addressName = await Location.reverseGeocodeAsync(location.coords)
    setLocation(addressName[0].name + ", " + addressCity[0].city);
    setLoading(false);
  };

  

  let addPropertyDetials = {
    Action: sellOrBuy,
    PropertyType: propertiesType,
    SelectCategory: selectCategory,
    Price: propertyValue,
    Location: location,
    Address: proeprtyAddress,
    Description: propertyDescription,
    Photos: [],
    User: User,
  };

  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View style={styles.Propertyheader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={25} color="#000000" />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 21,
              color: "#000000",
              fontFamily: "InterMedium",
            }}
          >
            Add Properties
          </Text>
          <Text>
            Step 2<Text style={{ color: "#A69A9A" }}>/3</Text>
          </Text>
        </View>

        <View style={styles.wrapperContainer}>
          {/* Sell Or Buy Radio Button */}
          <View style={[styles.innerWrapperContainer, { marginTop: 20 }]}>
            <Text style={styles.sideHeadings}>I want to</Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSellOrBuy("Sell")}
              >
                <View style={styles.radioButtonContainer}>
                  <Text style={styles.radioButtonText}>Sell</Text>
                  <RadioButton
                    value="Sell"
                    status={sellOrBuy === "Sell" ? "checked" : "unchecked"}
                    onPress={() => setSellOrBuy("Sell")}
                    uncheckedColor="black"
                    color="black"
                  />
                </View>
              </TouchableOpacity>

              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSellOrBuy("Rent")}
                >
                  <View style={styles.radioButtonContainer}>
                    <Text style={styles.radioButtonText}>Rent</Text>
                    <RadioButton
                      value="Rent"
                      status={sellOrBuy === "Rent" ? "checked" : "unchecked"}
                      onPress={() => setSellOrBuy("Rent")}
                      uncheckedColor="black"
                      color="black"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Property Type Radio Button */}
          <View style={styles.innerWrapperContainer}>
            <Text style={styles.sideHeadings}>Properties Types</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setPropertiesType("Residential");
                }}
              >
                <View style={styles.radioButtonContainer}>
                  <Text style={styles.radioButtonText}>Residential</Text>
                  <RadioButton
                    value="Residential"
                    status={
                      propertiesType === "Residential" ? "checked" : "unchecked"
                    }
                    onPress={() => setPropertiesType("Residential")}
                    uncheckedColor="black"
                    color="black"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setPropertiesType("Commercial")}
              >
                <View style={styles.radioButtonContainer}>
                  <Text style={styles.radioButtonText}>Commercial</Text>
                  <RadioButton
                    value="Commercial"
                    status={
                      propertiesType === "Commercial" ? "checked" : "unchecked"
                    }
                    onPress={() => setPropertiesType("Commercial")}
                    uncheckedColor="black"
                    color="black"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Property Category Radio Button */}
          <View style={styles.innerWrapperContainer}>
            <Text style={styles.sideHeadings}>Select Category</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setSelectCategory("Buildings");
                }}
              >
                <View style={styles.radioButtonContainer}>
                  <Text style={styles.radioButtonText}>Buildings</Text>
                  <RadioButton
                    value="Buildings"
                    status={
                      selectCategory === "Buildings" ? "checked" : "unchecked"
                    }
                    onPress={() => setSelectCategory("Buildings")}
                    uncheckedColor="black"
                    color="black"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setSelectCategory("Farm land");
                }}
              >
                <View style={styles.radioButtonContainer}>
                  <Text style={styles.radioButtonText}>Farm land</Text>
                  <RadioButton
                    value="Farm Land"
                    status={
                      selectCategory === "Farm land" ? "checked" : "unchecked"
                    }
                    onPress={() => setSelectCategory("Farm land")}
                    uncheckedColor="black"
                    color="black"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Property Value Input */}
          <View style={styles.innerWrapperContainer}>
            <Text style={styles.sideHeadings}>
              Property Value <Text style={{ color: "red" }}>*</Text>
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <View style={{ paddingRight: 8 }}>
                <Image
                  source={require("../../../assets/images/fontisto_inr.png")}
                />
              </View>
              <TextInput
                placeholder="00,000,000"
                value={propertyValue}
                onChangeText={(text) => setPropertyValue(text)}
                style={[
                  { fontSize: 22, color: "#000000" },
                  {
                    borderBottomWidth: propertyValueValid ? 0 : 1,
                    borderColor: propertyValueValid ? "" : "red",
                  },
                ]}
                keyboardType="number-pad"
              />
            </View>
          </View>

          {/* Property Description Input */}
          <View style={styles.innerWrapperContainer}>
            <Text style={styles.sideHeadings}>
              Write Property Description <Text style={{ color: "red" }}>*</Text>
            </Text>
            <View
              style={{
                height: 100,
                backgroundColor: "#FFFFFF",
                marginTop: 20,
                elevation: 10,
                shadowOffset: { width: -1, height: -1 },
                shadowOpacity: 0.2,
              }}
            >
              <TextInput
                style={[
                  {
                    backgroundColor: "white",
                    height: "100%",
                    textAlignVertical: "top",
                    padding: 15,
                    paddingTop: 13,
                  },

                  {
                    borderColor: propertyDescriptionValid ? "" : "red",
                    borderWidth: propertyDescriptionValid ? 0 : 1,
                  },
                ]}
                editable={true}
                multiline={true}
                placeholder="Enter property description"
                value={propertyDescription}
                onChangeText={(text) => setPropertyDescription(text)}
              />
            </View>
          </View>

          {/* Property Address Input */}
          <View style={styles.innerWrapperContainer}>
            <Text style={[styles.sideHeadings, { marginTop: 10 }]}>
              Address <Text style={{ color: "red" }}>*</Text>
            </Text>
            <View style={{ marginTop: 5, height: 50 }}>
              <View
                style={{
                  backgroundColor: "#FFFFFF",

                  elevation: 10,
                  shadowOffset: { width: -1, height: -1 },
                  shadowOpacity: 0.2,
                }}
              >
                <TextInput
                  placeholder="Add address here"
                  style={[
                    {
                      padding: 15,
                    },
                    {
                      borderWidth: propertyAddressValid ? 0 : 1,
                      borderColor: propertyAddressValid ? "" : "red",
                    },
                  ]}
                  value={proeprtyAddress}
                  onChangeText={(text) => setPropertyAddress(text)}
                />
              </View>
            </View>

            <Text style={[styles.sideHeadings, { marginTop: 10 }]}>
              Location <Text style={{ color: "red" }}>*</Text>
            </Text>
            <View style={{ marginTop: 5, height: 50 }}>
              <View
                style={{
                  backgroundColor: "#FFFFFF",

                  elevation: 10,
                  shadowOffset: { width: -1, height: -1 },
                  shadowOpacity: 0.2,
                }}
              >
                <TextInput
                  placeholder="Add Location here"
                  value={loading === true ? "Loading..." : location}
                  onChangeText={(text) => setLocation(text)}
                  style={[
                    {
                      padding: 15,
                    },
                    {
                      borderWidth: propertyLocationValid ? 0 : 1,
                      borderColor: propertyLocationValid ? "" : "red",
                    },
                  ]}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                paddingBottom: 80,
              }}
              onPress={() => {
                getCurrentCity();
              }}
            >
              <Image
                source={require("../../../assets/images/currentPin.png")}
              />
              <Text
                style={{
                  paddingLeft: 8,
                  fontFamily: "InterMedium",
                  fontSize: 16,
                }}
              >
                Use my current location
              </Text>
            </TouchableOpacity>
          </View>

          {/* Property Location Input */}
          <View
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              paddingRight: 30,
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 8,
                borderWidth: 1,
                paddingHorizontal: 20,
                paddingVertical: 8,
                backgroundColor: "#000000",
              }}
              onPress={() => {
                validateInputs();
              }}
            >
              <Text
                style={{
                  fontFamily: "Inter",
                  fontSize: 17,
                  color: "#FFFFFF",
                  paddingRight: 10,
                }}
              >
                Next
              </Text>
              <AntDesign name="doubleright" size={15} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Modal when user didnot enter Input values */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View
              style={{
                marginTop: 300,
                backgroundColor: "#F5F5F5",
                justifyContent: "center",
                paddingHorizontal: 20,
                paddingVertical: 20,
                paddingTop: 50,
                margin: 30,
                borderRadius: 8,
                elevation: 50,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "#000000",
                shadowOpacity: 0.5,
              }}
            >
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  paddingRight: 10,
                  paddingTop: 15,
                }}
              >
                <Ionicons name="close" size={25} />
              </TouchableOpacity>
              <View>
                <Text style={{ fontFamily: "InterBold", fontSize: 20 }}>
                  Please enter all required fields
                </Text>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: "#000",
                    borderRadius: 8,
                    width: 100,
                    height: 40,
                    justifyContent: "center",
                    marginTop: 20,
                    backgroundColor: "#000000",
                  }}
                  onPress={() => setModalVisible(false)}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontFamily: "InterMedium",
                      color: "#FFFFFF",
                    }}
                  >
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default SellProperties;

const styles = StyleSheet.create({
  Propertyheader: {
    paddingHorizontal: 30,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapperContainer: {
    paddingHorizontal: 30,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    width: 155,
    height: 43,
    borderColor: "#0074B6",
    backgroundColor: "#D1EEFF",
    borderRadius: 30,
    paddingHorizontal: 20,
    marginRight: 20,
    marginTop: 6,
  },

  sideHeadings: {
    fontSize: 17,
    fontFamily: "InterMedium",
    color: "1F215D",
  },
  innerWrapperContainer: {
    marginVertical: 10,
    marginBottom: 0,
  },

  radioButtonText: {
    fontFamily: "Inter",
    fontSize: 15,
    color: "#1F215D",
  },
});
