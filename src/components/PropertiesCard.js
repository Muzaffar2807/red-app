import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const PropertiesCard = ({
  id,
  name,
  description,
  image,
  navigation,
  price,
  city,
  user,
  location,
}) => {
  let product = {
    id: id,
    name: name,
    description: description,
    image: image,
    price: price,
    city: city,
    user: user,
    location: location,
  };

  const displayOneImage = image[0].secure_url;

  const [favourite, setFavourite] = useState([]);
  const [isFavourite, setIsFavourite] = useState();

  const addToFavourites = async (product) => {
    // console.log(prod);
    // setIsFavourite(true);
    console.log("Add to Favorites");
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Property Details", { product });
      }}
      key={id}
      style={{
        shadowOffset: { width: -0, height: 0 },
        shadowOpacity: 0.1,
        elevation: 1.4,
        width: 244,
        height: 290,
        borderRadius: 21,
        backgroundColor: "#FFFFFF",
        marginRight: 15,
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Image
          source={{ uri: image }} //displayOneImage
          style={{
            width: 244,
            height: 140,
            borderRadius: 18,
            elevation: 150,
            shadowColor: "#171717",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            addToFavourites(product);
          }}
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
          {isFavourite ? (
            <Ionicons name="heart" color="red" size={20} />
          ) : (
            <Ionicons name="heart-outline" size={20} />
          )}
        </TouchableOpacity>

        <View style={{ padding: 8, paddingTop: 8 }}>
          <Text
            style={{
              fontFamily: "InterMedium",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: "#565656",
              alignItems: "center",
              textAlign: "center",
              textTransform: "capitalize",
              fontSize: 11,
            }}
          >
            <Ionicons name="location" size={11} />
            {location}
          </Text>
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
            ₹{price}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 5,
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="chatbox" size={15} />
                <Text style={{ fontSize: 13, color: "#565656", marginLeft: 5 }}>
                  Chat Now
                </Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="call" size={18} />
              <Text style={{ fontSize: 13, color: "#565656", marginLeft: 5 }}>
                Call Now
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingTop: 8,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Property Details", { product });
              }}
              style={{
                backgroundColor: "#000000",
                width: 100,
                height: 28,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10,
                  fontFamily: "PoppinsBold",
                }}
              >
                Learn More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default PropertiesCard;
