import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import Ionicons from "react-native-vector-icons/Ionicons";
import RealEstateDetailsCard from "../../components/RealEstateDetailsCard";  
import Swiper from "react-native-swiper";

const FavoritiesDetailsProperty = ({ route, navigation }) => {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View>
        <Swiper
          style={styles.wrapper2}
          showsPagination={true}
          dotStyle={{
            marginBottom: 45,
            width: 15,
            height: 15,
            borderRadius: 38,
          }}
          activeDotStyle={{
            marginBottom: 45,
            width: 15,
            height: 15,
            borderRadius: 38,
          }}
          dotColor="#FFFFFF"
          activeDotColor="#000B72"
          loop={true}
          autoplay={false}
        >
          <View testID="Hello" style={styles.slide1}>
            <Image
              source={{ uri: route.params?.fav.image }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View testID="Beautiful" style={styles.slide2}>
            <Text style={styles.text}>2</Text>
          </View>
          <View testID="Simple" style={styles.slide3}>
            <Text style={styles.text}>3</Text>
          </View>
        </Swiper>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 75,
            left: 30,
            backgroundColor: "#FFFFFF",
            borderRadius: 38,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="chevron-back-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            position: "absolute",
            top: 75,
            right: 30,
            backgroundColor: "#FFFFFF",
            borderRadius: 38,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="share-social-outline" size={25} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          top: -50,
          backgroundColor: "#FFFFFF",
          borderTopStartRadius: 48,
          borderTopEndRadius: 48,
          paddingHorizontal: 40,
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
            {route.params?.fav.PropertyType}
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
            }}
          >
            {route.params?.fav.description}
          </Text>

          <View
            style={{
              backgroundColor: "#FFFFFF",

              marginTop: 30,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "#000000",
              shadowOpacity: 0.2,
              elevation: 10,
              padding: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../../assets/images/profile.jpg")}
                style={{ width: 64, height: 64, borderRadius: 50 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{
                    fontFamily: "InterMedium",
                    color: "#005A1F",
                    fontSize: 17,
                  }}
                >
                  Micheal Don
                </Text>
                <Text
                  style={{
                    fontFamily: "InterMedium",
                    fontSize: 13,
                    color: "#000000",
                  }}
                >
                  Owner
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Ionicons name="call" color="#000000" size={22} />
              <Text
                style={{
                  color: "#969595",
                  fontSize: 15,
                  fontFamily: "Inter",
                  paddingLeft: 10,
                }}
              >
                +91895478512
              </Text>
            </View>
            <View
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
            </View>
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
              {route.params?.fav.price}/month
            </Text>
            <TouchableOpacity
              onPress={() => console.log("Chat")}
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

export default FavoritiesDetailsProperty;

const styles = StyleSheet.create({
  wrapper2: {
    height: 420,
    borderRadius: 10,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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