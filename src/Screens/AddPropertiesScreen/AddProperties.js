import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import SafeViewAndroid from "../../components/SafeViewAndroid"; 
import Ionicons from "react-native-vector-icons/Ionicons"; 

const AddProperties = ({ navigation }) => {
 

  return (
    <SafeAreaView
      style={[SafeViewAndroid.AndroidSafeArea, styles.addProperties]}
    >
      <View style={styles.Propertyheader}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back" size={25} color="#000000" />
        </TouchableOpacity>

        <Text
          style={{ fontSize: 21, color: "#000000", fontFamily: "InterMedium" }}
        >
          Add Properties
        </Text>
        <Text>
          Step 1<Text style={{ color: "#A69A9A" }}>/3</Text>
        </Text>
      </View>

      <View style={{ paddingHorizontal: 30, marginTop: 60 }}>
        <Text style={{ fontSize: 31, fontFamily: "InterBold", lineHeight: 45 }}>
          Thank you for being{"\n"}Part of us....
        </Text>

        <View style={{ marginTop: 65, alignItems: "center" }}>
          <Pressable
            onPress={() =>
              navigation.navigate("Sell Properties")
            }
          >
            <View style={[styles.actionCards, { marginBottom: 90 }]}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../../assets/images/sell.png")}
                  style={{ marginRight: 20 }}
                />
                <Text style={styles.actionCardsText}>
                  I want to sell or rent properties
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Buy Properties")}>
            <View style={styles.actionCards}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={require("../../../assets/images/buy.png")}
                  style={{ marginRight: 30 }}
                />
                <Text style={styles.actionCardsText}>I want to buy</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddProperties;

const styles = StyleSheet.create({
  addProperties: {
    backgroundColor: "#F5F5F5",
  },
  Propertyheader: {
    paddingHorizontal: 30,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionCards: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    width: 307,
    height: 140,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    elevation: 10,
  },
  actionCardsText: {
    color: "#0074B6",
    fontFamily: "InterMedium",
    fontSize: 21,
  },
});
