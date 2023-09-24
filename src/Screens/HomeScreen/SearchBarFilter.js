import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import FilterButtons from "../../components/FilterButtons";
import CustomActionButtonFilter from "../../components/CustomActionButtonFilter";
import RadioButtonGroup from "../../components/RadioButtonGroup";

const windowHeight = Dimensions.get("window").height;

const SearchBarFilter = ({ navigation }) => {
  const [filters, setFilters] = React.useState([
    { id: 1, label: "Any" },
    { id: 2, label: "Commercial" },
    { id: 3, label: "Residential" },
    { id: 4, label: "Apartments" },
    { id: 5, label: "Farm Land" },
  ]);

  const [selected, setSelected] = useState(filters[0]);

  const filterPageButtons = (data) => {
    if (selected === data) return setSelected(filters[0]);

    setSelected(data);
  };

  //Buy Or Lease
  const [actionTab, setActionTab] = useState(1);

  const onSelectingActionTab = (value) => {
    setActionTab(value);
  };

  //Selecting multiple options radio
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  useEffect(() => {
    console.log(selectedValues);
  }, [selectedValues]);

  const optionsForLease = [
    { label: "Office Spaces", value: "office spaces" },
    { label: "Commercial Spaces", value: "commercial spaces" },
    { label: "Home", value: "home" },
  ];

  const optionsForBuy = [
    { label: "Open Land", value: "open land" },
    { label: "Flat", value: "flat" },
    { label: "Farm Land", value: "farm land" },
  ];

  //Budget
  const [lowestPrice, setLowestPrice] = useState("");
  const [highestPrice, setHighestPrice] = useState("");

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 30,
          height: windowHeight,
          backgroundColor: "#FFFFFF",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={25} />
            </TouchableOpacity>

            <Text style={{ fontFamily: "InterMedium", fontSize: 17 }}>
              Filter
            </Text>

            <TouchableOpacity
              onPress={() => console.log("Reset")}
              style={{
                backgroundColor: "#FFC700",
                paddingHorizontal: 18,
                paddingVertical: 8,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontFamily: "InterMedium",
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={styles.sideHeadings}>Property Type</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filters.map((filter) => (
                <FilterButtons
                  key={filter.id}
                  data={filter}
                  selected={filter === selected}
                  callback={filterPageButtons}
                />
              ))}
            </ScrollView>
          </View>

          <View style={{ marginBottom: 30 }}>
            <Text style={styles.sideHeadings}>Looking to</Text>
            <View>
              <CustomActionButtonFilter
                selectionMode={1}
                option1="Buy"
                option2="Lease"
                onSelectingActionTab={onSelectingActionTab}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1.2,
              borderBottomColor: "#766F6F",
              alignItems: "center",
              paddingBottom: 5,
              width: 350,
              marginBottom: 30,
            }}
          >
            <Ionicons
              name="search"
              size={22}
              color="#5A5757"
              style={{ paddingRight: 8 }}
            />
            <TextInput
              placeholder="Search Locality,Projects,Landmarks"
              style={{ fontSize: 18 }}
            />
            <TouchableOpacity>
              <Ionicons
                name="locate"
                size={22}
                color="#232E6B"
                style={{ marginLeft: 13 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: 30 }}>
            <Text style={styles.sideHeadings}>Budget</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ paddingHorizontal: 10}}>
                <Image
                  source={require("../../../assets/images/fontisto_inr.png")}
                />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  placeholder="From"
                  keyboardType="numeric"
                  value={lowestPrice}
                  onChangeText={(text) => setLowestPrice(text)}
                  style={styles.inputsBudget}
                />
                <Text style={{ marginRight: 20 }}>TO</Text>
                <TextInput
                  placeholder="To"
                  keyboardType="numeric"
                  value={highestPrice}
                  onChangeText={(text) => setHighestPrice(text)}
                  style={styles.inputsBudget}
                />
              </View>
            </View>
          </View>

          {actionTab == 1 && (
            <View>
              <Text style={[styles.sideHeadings, { marginBottom: 0 }]}>
                Type of Property
              </Text>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <RadioButtonGroup
                  options={optionsForBuy}
                  selectedValues={selectedValues}
                  onChange={handleChange}
                />
              </ScrollView>
            </View>
          )}
          {actionTab == 2 && (
            <View>
              <Text style={[styles.sideHeadings, { marginBottom: 0 }]}>
                Type of Property
              </Text>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <RadioButtonGroup
                  options={optionsForLease}
                  selectedValues={selectedValues}
                  onChange={handleChange}
                />
              </ScrollView>
            </View>
          )}

          <View style={{ marginVertical: 50 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                backgroundColor: "#2D62E9",
                paddingVertical: 15,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "InterMedium",
                  color: "#FFFFFF",
                  fontSize: 20,
                }}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchBarFilter;

const styles = StyleSheet.create({
  sideHeadings: {
    fontFamily: "InterBold",
    fontSize: 16,
    marginBottom: 18,
  },

  container: {
    flexDirection: "row",
  },

  inputsBudget: {
    borderWidth: 0.5,
    borderColor: "#C7C3C3",
    borderRadius: 10,
    width: 100,
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginRight: 20,
  },
});
