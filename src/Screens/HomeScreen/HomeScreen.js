import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
  Button,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import Header from "../../components/Header";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import Swiper from "react-native-swiper";
import { CitiesData } from "../../config/CitiesData";
import ExploreCites from "../../components/ExploreCites";
import FeaturedListing from "../../components/FeaturedListing";
import { FeaturedData } from "../../config/FeaturedData";
import PropertiesCard from "../../components/PropertiesCard";
import { PropertisData } from "../../config/PropertiesData";
import Carousel from "react-native-reanimated-carousel";
import { AppContext } from "../../context/AppContext";
import { ActivityIndicator } from "react-native-paper";

const colors = [
  "#26292E",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

const HomeScreen = ({ navigation, route }) => {
  const { allPropertiesData, isLoading, allPropertiesDataLength } =
    useContext(AppContext);

  //For Header Name
  const label = "Real Estate Developer's";
  //custom font
  let [loaded] = useFonts({
    MontserratBold: require("../../../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    MontserratLight: require("../../../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    InterMedium: require("../../../assets/fonts/Montserrat/Inter-Medium.ttf"),
    Inter: require("../../../assets/fonts/Montserrat/Inter-Regular.ttf"),
    InterBold: require("../../../assets/fonts/Montserrat/Inter-Bold.ttf"),
    InterRegular: require("../../../assets/fonts/Montserrat/Inter-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Montserrat/Poppins-Medium.ttf"),
    PoppinsBold: require("../../../assets/fonts/Montserrat/Poppins-Bold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Montserrat/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  //custom font

  const width = Dimensions.get("window").width;

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Header label={label} navigation={navigation} />
      {/* <TouchableOpacity onPress={() => }> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ padding: 16, paddingTop: 0, backgroundColor: "#F5F5F5" }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#F5F5F5",
          }}
        >
          <Text style={{ fontFamily: "InterMedium", fontSize: 18 }}>
            Location
          </Text>

          <View>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => {
                navigation.navigate("Set Location");
              }}
            >
              <Ionicons name="location" color="#000000" size={20} />
              <Text style={{ fontFamily: "InterMedium" }}>Set Location</Text>
              <Ionicons name="chevron-down-outline" color="#002E2E" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.sliderContainer, styles.globalStyle]}>
          <Swiper
            style={styles.wrapper}
            showsButtons
            showsPagination={false}
            loop={false}
            autoplay={false}
            nextButton={
              <View style={[styles.silderButton, styles.rightButton]}>
                <Ionicons
                  name="chevron-forward-outline"
                  color="#000000"
                  size={22}
                />
              </View>
            }
            prevButton={<></>}
          >
            <View testID="Hello" style={styles.slide1}>
              <Image
                source={require("../../../assets/images/banner4.png")}
                style={{ width: "120%", height: "100%" }}
              />
            </View>
            <View testID="Beautiful" style={styles.slide2}>
              <Image
                source={require("../../../assets/images/banner1.jpg")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View testID="Simple" style={styles.slide3}>
              <Image
                source={require("../../../assets/images/banner3.jpg")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </Swiper>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "#0074B6",
              padding: 10,
              borderRadius: 30,
              top: -28,
            }}
          >
            <Ionicons name="search" size={22} style={{ paddingRight: 8 }} />
            <TextInput
              placeholder="Search category"
              placeholderTextColor="#766F6F"
              style={styles.searchBar}
            />
            <TouchableOpacity
              style={{ marginLeft: "auto" }}
              onPress={() => navigation.navigate("Search Filter")}
            >
              <Ionicons name="funnel" size={21} style={{ paddingRight: 6 }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingTop: 0 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontFamily: "InterMedium",
                fontSize: 16,
                color: "#000000",
              }}
            >
              Explore Cities
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item) => (
              <ExploreCites
                key={item.id}
                cityImg={item.image}
                cityName={item.city}
              />
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "InterMedium",
              fontSize: 16,
              color: "#000000",
            }}
          >
            Featured Listing
          </Text>
          <TouchableOpacity activeOpacity={0.9}>
            <Text
              style={{
                fontFamily: "InterMedium",
                fontSize: 14,
                color: "#766F6F",
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 8 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ elevation: 50 }}
          >
            {FeaturedData.map((featured) => (
              <FeaturedListing
                key={featured.id}
                name={featured.name}
                city={featured.city}
                imgUrl={featured.image}
                price={featured.price}
              />
            ))}
          </ScrollView>
        </View>

       {/*  <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 30,
            paddingBottom: 13,
          }}
        >
          <Text
            style={{
              fontFamily: "InterMedium",
              fontSize: 16,
              color: "#000000",
            }}
          >
            Commercial{" "}
            <Text style={{ color: "#766F6F" }}>
              {" "}
              {`(${allPropertiesDataLength})`}
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("See All");
            }}
          >
            <Text
              style={{
                fontFamily: "InterMedium",
                fontSize: 14,
                color: "#766F6F",
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View> */}
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ elevation: 50 }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ elevation: 50 }}
            >
              {isLoading ? (
                <ActivityIndicator color="#000000" size={40} />
              ) : (
                <>
                  {allPropertiesData?.map((product) => (
                    <PropertiesCard
                      key={product._id}
                      name={product.Action}
                      city={product.Address}
                      price={product.Price}
                      image={product.Photos}
                      location={product.Location}
                      description={product.Description}
                      user={product.User}
                      navigation={navigation}
                    />
                  ))}
                </>
              )}
            </ScrollView>

            {/* {PropertisData.map((product) => (
              <PropertiesCard
                key={product.id}
                id={product.id}
                name={product.name}
                city={product.city}
                price={product.price}
                image={product.image}
                description={product.description}
                navigation={navigation}
              />
            ))} */}
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 30,
            paddingBottom: 13,
          }}
        >
          <Text
            style={{
              fontFamily: "InterMedium",
              fontSize: 16,
              color: "#000000",
            }}
          >
            Residential
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "InterMedium",
                fontSize: 14,
                color: "#766F6F",
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ elevation: 10 }}
          >
            {PropertisData.map(
              ({ id, name, city, image, description, price }) => (
                <>
                  <PropertiesCard
                    key={id}
                    name={name}
                    city={city}
                    price={price}
                    image={image}
                    description={description}
                    navigation={navigation}
                  />
                </>
              )
            )}
          </ScrollView>
        </View>

        {/* Ads */}

        <View style={{ marginBottom: 30, marginTop: 30 }}>
          <Carousel
            width={380}
            height={200}
            loop
            mode="parallax"
            pagingEnabled={true}
            snapEnabled={true}
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            data={colors}
            renderItem={({ index }) => (
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  width: 380,
                  height: 200,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>{index}</Text>
                <Image source={{ index }} />
              </View>
            )}
            autoPlay={true}
            autoPlayInterval={1500}
          />
        </View>

        <View
          style={{
            marginBottom: 40,
            backgroundColor: "#FFFFFF",

            padding: 20,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "MontserratBold",
              fontSize: 18,
              color: "#07005B",
            }}
          >
            Login and Personalize
          </Text>
          <View style={{ marginLeft: 28, marginTop: 8 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Ionicons name="arrow-forward-circle" color="#0FA958" size={22} />
              <Text style={{ color: "#565656", paddingLeft: 8 }}>
                Easy connect with sellers
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Ionicons name="arrow-forward-circle" color="#0FA958" size={22} />
              <Text style={{ color: "#565656", paddingLeft: 8 }}>
                Personalized experience
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Ionicons name="arrow-forward-circle" color="#0FA958" size={22} />
              <Text style={{ color: "#565656", paddingLeft: 8 }}>
                Direct Chat with sellers
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#0FA958",
                width: 80,
                padding: 10,
                alignContent: "center",
                alignItems: "center",
                borderRadius: 8,
                paddingTop: 8,
                paddingBottom: 8,
                marginLeft: 35,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10,
                  fontFamily: "InterMedium",
                }}
              >
                Login Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Slider Ads */}
        <View
          style={{
            marginBottom: 130,
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
          }}
        >
          <Swiper
            style={styles.wrapper2}
            showsPagination={true}
            dotColor="#0FA958"
            activeDotColor="#000000"
            loop={true}
            autoplay={false}
          >
            <View testID="Hello" style={styles.slide1}>
              <Text style={styles.text}>1</Text>
            </View>
            <View testID="Beautiful" style={styles.slide2}>
              <Text style={styles.text}>2</Text>
            </View>
            <View testID="Simple" style={styles.slide3}>
              <Text style={styles.text}>3</Text>
            </View>
          </Swiper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: 13,
  },

  wrapper: {
    height: 150,
    elevation: 5,
    shadowOffset: { width: 4, height: 0 },
    shadowColor: "#000000",
    shadowOpacity: 0.5,
  },

  wrapper2: {
    height: 220,
    borderRadius: 10,
  },

  silderButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 38,
    elevation: 15,
    shadowOffset: { width: 4, height: 0 },
    shadowColor: "#000000",
    shadowOpacity: 0.2,
  },

  searchBar: {
    fontSize: 18,
  },

  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
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
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
