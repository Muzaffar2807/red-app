import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  Linking,
  Share,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import Swiper from "react-native-swiper";
import axios from "axios";

const RealEstateDetailsCard = ({ navigation, route }) => {
  const imagesOfProperty = route.params?.product.image;
  const width = Dimensions.get("window").width;


  const [posterDetails, setPosterDetails] = useState([]);
  //get the info of the user who posted
  const getPosterDetails = async (userId) => {
    const response = await axios
      .get(
        `https://prickly-mite-garment.cyclic.app/api/user/getoneuser/${userId}`
      )
      .then((res) => setPosterDetails(res.data.user));
  };
  useEffect(() => {
    getPosterDetails(route.params.product.user);
  }, []);

  const { city, description, image } = route.params.product;

  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
    >
      <View>
        <Swiper
          style={styles.wrapper2}
          showsPagination={true}
          dotStyle={{
            marginBottom: 120,
            width: 15,
            height: 15,
            borderRadius: 38,
          }}
          activeDotStyle={{
            marginBottom: 120,
            width: 15,
            height: 15,
            borderRadius: 38,
          }}
          dotColor="#FFFFFF"
          activeDotColor="#000B72"
          loop={true}
          autoplay={false}
        >
          {imagesOfProperty.map((img, index) => (
            <View key={index} style={styles[`slide${index + 1}`]}>
              <Image
                source={{ uri: img.secure_url }}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          ))}
        </Swiper>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 45,
            left: 30,
            backgroundColor: "#FFFFFF",
            borderRadius: 38,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            shadowOffset: { width: 0, height: 0 },
            shadowColor: "#000000",
            shadowOpacity: 0.2,
            elevation: 10,
          }}
        >
          <Ionicons name="chevron-back-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
           
          }}
          style={{
            position: "absolute",
            top: 45,
            right: 30,
            backgroundColor: "#FFFFFF",
            borderRadius: 38,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            shadowOffset: { width: 0, height: 0 },
            shadowColor: "#000000",
            shadowOpacity: 0.2,
            elevation: 10,
          }}
        >
          <Ionicons name="share-social-outline" size={25} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          top: -130,
          backgroundColor: "#FFFFFF",
          borderTopStartRadius: 48,
          borderTopEndRadius: 48,
          paddingHorizontal: 35,
          height: "100%",
        }}
      >
        <View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "InterMedium",
              fontSize: 21,
              paddingTop: 30,
              color: "#000B72",
            }}
          >
            {route.params?.product.name}
          </Text>

          <Text
            style={{
              fontFamily: "InterMedium",
              fontSize: 21,
              color: "#000000",
              paddingTop: 20,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              paddingTop: 20,
              lineHeight: 21,
              fontSize: 16,
              fontFamily: "Inter",
              textTransform: "capitalize",
            }}
          >
            {route.params?.product.description}
          </Text>
          <Text
            style={{
              fontFamily: "InterMedium",
              fontSize: 21,
              color: "#000000",
              paddingTop: 20,
            }}
          >
            Owner Details
          </Text>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              marginTop: 10,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "#000000",
              shadowOpacity: 0.2,
              elevation: 10,
              padding: 20,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: posterDetails.Photo }}
                  style={{ width: 64, height: 64, borderRadius: 50 }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text
                    style={{
                      fontFamily: "InterMedium",
                      color: "#005A1F",
                      fontSize: 17,
                      textTransform: "capitalize",
                    }}
                  >
                    {posterDetails?.Name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="call"
                      color="#000000"
                      size={22}
                      style={{ marginRight: 8 }}
                    />
                    <Text style={{ color: "#969595" }}>
                      {posterDetails.MobileNumber}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 20,
                width: 100,
                alignItems: "center",
                marginLeft: "auto",
                paddingHorizontal: 8,
                paddingVertical: 10,
                borderRadius: 8,
                borderWidth: 1,
              }}
              onPress={() => {
                Linking.openURL(`tel:${posterDetails.MobileNumber}`);
              }}
            >
              <View>
                <Text style={{ fontFamily: "InterBold" }}>Call Now</Text>
              </View>
            </TouchableOpacity>

            {/*  <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Ionicons name="location" color="#000000" size={22} />
              <Text
                style={{
                  color: "#969595",
                  fontSize: 15,
                  fontFamily: "Inter",
                  paddingLeft: 10,
                }}
              >
                Sangareddy, TS
              </Text>
            </View>  */}
          </View>

          <View
            style={{
              paddingVertical: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 16, fontFamily: "Inter", color: "#000C79" }}
            >
              {route.params?.product.price}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={{
                width: 180,
                height: 50,
                backgroundColor: "#000000",
                borderRadius: 13,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                  fontFamily: "InterMedium",
                }}
              >
                Chat now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RealEstateDetailsCard;

const styles = StyleSheet.create({
  wrapper2: {
    height: 420,
    borderRadius: 10,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
});
