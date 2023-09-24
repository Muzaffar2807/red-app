import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const FilterButtons = ({ data, callback, selected, disabled }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <TouchableOpacity
        style={[
          styles.filterButton,
          {
            backgroundColor: disabled
              ? "lightgrey"
              : selected
              ? "#232E6B"
              : "white",
          },
        ]}
        onPress={() => {
          if (callback && !disabled) {
            callback(data); 
          }
        }}
      >
        <Text
          style={{
            color: selected ? "white" : "#766F6F",
            fontFamily: "Inter",
            fontSize: 15,
            paddingBottom: 1,
            textAlign: "center",
          }}
        >
          {data.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButtons;

const styles = StyleSheet.create({
  filterButton: {
    borderRadius: 15,

    paddingLeft: 24,
    paddingRight: 24,
    marginRight: 8,
    height: 35,
    borderWidth: 0.3,
    borderColor: "#C7C3C3",
    justifyContent: "center",
    alignItems: "center",
  },
});
