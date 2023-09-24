import { View, Text, SafeAreaView, ScrollView } from "react-native";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import PropertiesCard from "../../components/PropertiesCard";
import FavouritesCard from "../../components/FavouritesCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import axios from "axios";

const FavouritesScreen = ({ route, navigation }) => {
  const [favData, setFavData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getallfavourite() {
    try {
      const response = await axios.get(
        "https://prickly-mite-garment.cyclic.app/api/favourite/getallfavourite"
      );
      setFavData(response.data.favourite);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error)
    }
  }

  useEffect(() => {
    getallfavourite();
  }, []);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Header label="Favorities" navigation={navigation} />
      <ScrollView style={{ padding: 20, paddingTop: 0 }}>
        {isLoading == true ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 250,
            }}
          >
            <ActivityIndicator size={50} color="#000000" />
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           {/*  {favData.map((fav) => (
              <FavouritesCard key={fav._id} fav={fav} navigation={navigation} />
            ))} */}
            <Text style={{ fontFamily: "InterMedium", fontSize: 20}}>{`Under Development!!`}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavouritesScreen;
