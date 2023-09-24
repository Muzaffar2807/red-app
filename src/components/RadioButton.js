import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const RadioButton = ({ label, value, selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, selected && styles.selected]}
    >
      {selected ? (
        <MaterialIcon name="done" size={15} />
      ) : (
        <AntDesign name="plus" size={15} />
      )}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.5,
    borderColor: "#C7C3C3",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 20,
    paddingRight: 20,
    marginRight: 15,
    borderRadius: 45,
    flexDirection: "row",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#D1EEFF",
    borderColor: "#0074B6",
  },
  label: {
    fontSize: 14,
    fontFamily: "Inter",
    color: "#4A4444",
    paddingLeft: 8,
  },
});
