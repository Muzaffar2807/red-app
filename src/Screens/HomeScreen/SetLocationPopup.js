import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import Autocomplete from "react-native-autocomplete-input";

const windowHeight = Dimensions.get("window").height;

const cities = [
  "Hyderabad",
  "Mumbai",
  "Sangareddy",
  "Zaheerabad",
  "Sadashivpet",
  "Banglore",
];

const SetLocationPopup = ({ navigation }) => {
  //location state
  const [location, setLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [loading, setLoading] = useState(false);

  //Getting the Current Loaction from User
  const getCurrentCitie = async () => {
    setLoading(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission Denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const addressCity = await Location.reverseGeocodeAsync(location.coords);
    const addressName = await Location.reverseGeocodeAsync(location.coords);
    setCurrentLocation(addressName[0].name + ", " + addressCity[0].city);
    setLocation(addressName[0].name + ", " + addressCity[0].city);
    setLoading(false);
  };

  //search recommendation
  const [city, setCity] = useState("");

  const cityList = cities.filter((item) =>
    item.toLowerCase().startsWith(city.toLowerCase())
  );

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.wrapperContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#000000" />
          </TouchableOpacity>

          <Text
            style={{ fontSize: 21, fontFamily: "InterMedium", marginLeft: 20 }}
          >
            Looking to <Text style={{ fontFamily: "InterBold" }}>Buy </Text>in
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
            height: 45,
            backgroundColor: "#D1EEFF",
            borderWidth: 1,
            borderColor: "#0074B6",
            borderRadius: 10,
            paddingLeft: 15,
          }}
        >
          <Ionicons
            name="search"
            size={25}
            style={{ paddingRight: 8 }}
            color="#766F6F"
          />
          {loading ? (
            <View>
              <Text style={{ fontSize: 16 }}>Loading...</Text>
            </View>
          ) : (
            <TextInput
              placeholder="Search your city"
              placeholderTextColor="#766F6F"
              style={{ fontSize: 16 }}
              value={location}
              onChangeText={(e) => setLocation(e)}
            />
          )}
        </View>

        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={() => {
              getCurrentCitie();
            }}
          >
            <Image source={require("../../../assets/images/currentPin.png")} />
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

        <View
          style={{
            position: "absolute",
            flex: 1,
            top: 200,
            left: 40,
            width: "100%",
            border: "none",
            backgroundColor: "#FFFFFF",
             
          }}
        > 
          <Autocomplete
            containerStyle={styles.autocompleteContainer}
            inputContainerStyle={styles.inputContainer}
            data={cityList}
            defaultValue={city}
            value={city}
            onChangeText={(text) => setCity(text)}
            placeholder="Search a city"
            flatListProps={{
              keyboardShouldPersistTaps: "always",
              renderItem: ({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setCity(item);
                  }}
                >
                  <ScrollView
                    style={{
                      height: 44,
                      backgroundColor: "#EEEEEE",
                      marginVertical: 3,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          paddingTop: 10,
                          paddingLeft: 15,
                          fontFamily: "Inter",
                          fontSize: 16,
                        }}
                      >
                        {item}
                      </Text>
                    </View>
                  </ScrollView>
                </TouchableOpacity>
              ),
            }}
          /> 
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetLocationPopup;

const styles = StyleSheet.create({
  wrapperContainer: {
    paddingHorizontal: 35,
    paddingVertical: 35,
    backgroundColor: "#FFFFFF",
    height: windowHeight,
  },

  autocompleteContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 0,  
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: "#0074B6",
    paddingLeft: 10,
  },
});
