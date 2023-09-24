import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const FeaturedListing = ({ imgUrl, name, city, price }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "flex-start",
        paddingRight: 15,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}
    >
      <Image
        source={{ uri: imgUrl }}
        style={{
          width: 200,
          height: 150,
          borderRadius: 18,
          elevation: 150,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 190,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: "InterMedium",
            fontWeight: "500",
            paddingTop: 8,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontFamily: "InterMedium",
            fontWeight: "500",
            paddingTop: 8,
            color: "#FF7272",
          }}
        >
          ₹{price}/M
        </Text>
      </View>
      <Text style={{ color: '#565656', fontSize: 12, alignItems: 'center', paddingTop: 8 }}>
        <Ionicons name="location" />
        {city}
    </Text>
    </TouchableOpacity>
  );
};

export default FeaturedListing;
