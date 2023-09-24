import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const ExploreCites = ({ id, cityImg, cityName }) => {
  return (
    <TouchableOpacity
      key={id}
      style={{
        alignItems: "center",
        paddingRight: 15,
        paddingTop: 15,
        elevation: 10,
      }}
    >
      <Image
        source={{ uri: cityImg }}
        style={{ width: 70, height: 70, borderRadius: 50 }}
      />
      <Text style={{ paddingTop: 5, fontFamily: "InterMedium", fontSize: 14 }}>
        {cityName}
      </Text>
    </TouchableOpacity>
  );
};

export default ExploreCites;
