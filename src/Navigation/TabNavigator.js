import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import AddProperties from "../Screens/AddPropertiesScreen/AddProperties";
import FavouritesScreen from "../Screens/FavoritesScreen/FavouritesScreen";
import ChatScreen from "../Screens/ChatScreen/ChatScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropertyDetailsScreen from "../Screens/HomeScreen/PropertyDetailsScreen";
import SellProperties from "../Screens/AddPropertiesScreen/SellProperties";
import BuyProperties from "../Screens/AddPropertiesScreen/BuyProperties";
import EditProfile from "../Screens/ProfileScreen/EditProfile";
import PrivacyPolicy from "../Screens/ProfileScreen/PrivacyPolicy";
import FavoritiesDetailsProperty from "../Screens/FavoritesScreen/FavoritiesDetailsProperty";
import SetLocationPopup from "../Screens/HomeScreen/SetLocationPopup";
import SearchBarFilter from "../Screens/HomeScreen/SearchBarFilter";
import SeeAllPage from "../Screens/HomeScreen/SeeAllPage";
import SellPropertiesNext from "../Screens/AddPropertiesScreen/SellPropertiesNext";
import Messages from "../Screens/ChatScreen/Messages";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  if (routeName == "Property Details") {
    return "none";
  } else if (routeName == "Favorites Property Detail") {
    return "none";
  } else if (routeName == "Set Location") {
    return "none";
  } else if (routeName == "Search Filter") {
    return "none";
  } else if (routeName == "Messages") {
    return "none";
  } else if (routeName == "Edit Profile") {
    return "none"
  } else {
    return "flex";
  }
};

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -20,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 35,
          backgroundColor: "#000000",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

//Home Screen Stack
const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          component={HomeScreen}
          name="Home2"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Property Details"
          component={PropertyDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      >
        <Stack.Screen
          name="Set Location"
          component={SetLocationPopup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search Filter"
          component={SearchBarFilter}
          options={{ headerShown: false }}
        />
        <Stack.Group
          screenOptions={{
            presentation: "fullScreenModal",
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen
            name="See All"
            component={SeeAllPage}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  );
};

//Add Properties Screen Stack
const AddPropertiesStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={AddProperties}
        name="Add Properties"
        options={{ headerShown: false }}
      />

      <Stack.Group
        screenOptions={{
          presentation: "fullScreenModal",
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          component={SellProperties}
          name="Sell Properties"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={SellPropertiesNext}
          name="Sell Properties Next"
          options={{ headerShown: false }}
        />
      </Stack.Group>

      <Stack.Screen component={BuyProperties} name="Buy Properties" />
    </Stack.Navigator>
  );
};

//Profile Screen Stack
const ProfileScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProfileScreen}
        name="ProfileScreen"
        options={{ headerShown: false }}
      />

      <Stack.Screen component={EditProfile} name="Edit Profile" options={{ headerShown: false}}/>

      <Stack.Screen component={PrivacyPolicy} name="Privacy Policy" />
    </Stack.Navigator>
  );
};

//Favourites Screen Stack
const FavoritiesStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={FavouritesScreen} name="FavoritesScreen" />
      <Stack.Screen
        component={FavoritiesDetailsProperty}
        name="Favorites Property Detail"
      />
    </Stack.Navigator>
  );
};

//Chat Screen Stack
const ChatScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={ChatScreen} name="Chat" />
      <Stack.Group
        screenOptions={{
          
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen component={Messages} name="Messages" />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#000000",
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 70,
          paddingTop: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          tabBarHideOnKeyboard: true,
          keyboardHidesTabBar: true,
          tabBarStyle: {
            display: getTabBarVisibility(route),
            height: 70,
            paddingTop: 8,
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={focused ? "#000C79" : "#000000"}
                size={22}
              />
              <Text style={styles.labelText}>Home</Text>
            </View>
          ),
          tabBarHideOnKeyboard: true,
        })}
      />

      <Tab.Screen
        name="Favorities"
        component={FavoritiesStack}
        options={({ route }) => ({
          tabBarHideOnKeyboard: true,
          keyboardHidesTabBar: true,
          tabBarStyle: {
            display: getTabBarVisibility(route),
            height: 70,
            paddingTop: 8,
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                color={focused ? "#000C79" : "#000000"}
                size={22}
              />
              <Text style={styles.labelText}>Favourites</Text>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Add Properties2"
        component={AddPropertiesStack}
        options={({ route }) => ({
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/plus.png")}
              resizeMode="contain"
              style={{ width: 18, height: 18, tintColor: "#fff" }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        })}
      />

      <Tab.Screen
        name="Chat Stack"
        component={ChatScreenStack}
        options={({ route }) => ({
          tabBarHideOnKeyboard: true,
          keyboardHidesTabBar: true,
          tabBarStyle: {
            display: getTabBarVisibility(route),
            height: 70,
            paddingTop: 8,
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name={focused ? "chatbox" : "chatbox-outline"}
                color={focused ? "#000C79" : "#000000"}
                size={22}
              />
              <Text style={styles.labelText}>Chat</Text>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreenStack}
        options={({ route }) => ({
          tabBarHideOnKeyboard: true,
          keyboardHidesTabBar: true,
          tabBarStyle: {
            display: getTabBarVisibility(route),
            height: 70,
            paddingTop: 8,
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={focused ? "#000C79" : "#000000"}
                size={22}
              />
              <Text style={styles.labelText}>Profile</Text>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  labelText: {
    fontSize: 12,
  },
});
