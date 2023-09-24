import { View, StyleSheet } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";

const RadioButtonGroup = ({ options, selectedValues, onChange }) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          selected={selectedValues.includes(option.value)}
          onPress={() => onChange(option.value)}
        />
      ))}
    </View>
  );
};

export default RadioButtonGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
