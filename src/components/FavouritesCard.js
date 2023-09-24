import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavouritesCard = ({ fav, navigation }) => {
  const removeFavourite = async (product) => {
    console.log(`${product} is removed`)
  };

  const favDisplayOneImage = fav.Photos/* [0].secure_url */;

   
  //add to favorites
  const addToFavorites = async (product)  => {

  }

  return (
    <ScrollView
      key={fav._id}
      contentContainerStyle={{ alignContent: "center", alignItems: "center" }}
    >
      <ScrollView
        key={fav.id}
        style={{
          backgroundColor: "#FFFFFF",
          marginBottom: 20,
          borderRadius: 28,
          width: 300,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("Favorites Property Detail", { fav: fav });
          }}
        >
          <Image
            source={{ uri: favDisplayOneImage }}
            style={{ width: 300, height: 180, borderRadius: 28 }}
          />
          <TouchableOpacity
            onPress={() => {console.log(`Add this ${product} to fav`)}}
            style={{
              position: "absolute",
              right: 8,
              top: 12,
              backgroundColor: "#FFFFFF",
              borderRadius: 50,
              width: 30,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="heart" color="red" size={20} />
          </TouchableOpacity>
          <View
            style={{
              padding: 20,
              paddingLeft: 8,
              paddingTop: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "InterMedium",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              {fav.PropertyType}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 5,
              }}
            >
              <Ionicons name="location" size={11} />
              <Text
                style={{
                  color: "#565656",
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: 11,
                  textTransform: "capitalize",
                }}
              >
                {fav.Location}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "InterMedium",
                fontWeight: "500",
                paddingTop: 8,
                color: "#FF7272",
                textAlign: "center",
              }}
            >
              ₹{fav.Price}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: 12,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  marginRight: 10,
                }}
              >
                <Ionicons name="chatbox" size={15} style={{ marginRight: 6 }} />
                <Text style={{ fontSize: 13, color: "#565656" }}>Chat Now</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="call" size={18} style={{ marginRight: 6 }} />
                <Text style={{ fontSize: 13, color: "#565656" }}>Call Now</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                removeFavourite(fav);
              }}
              style={{
                backgroundColor: "#000000",
                marginTop: 20,
                padding: 13,
                paddingHorizontal: 50,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>Remove</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </ScrollView>
    </ScrollView>
  );
};

export default FavouritesCard;
