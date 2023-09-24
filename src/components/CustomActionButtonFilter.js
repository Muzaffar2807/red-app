import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const CustomActionButtonFilter = ({
  selectionMode,
  option1,
  option2,
  onSelectingActionTab,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectingActionTab(value);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => updateSwitchData(1)}
        style={[
          {
            marginRight: 13,
            backgroundColor: getSelectionMode == 1 ? "#232E6B" : "#FFFFFF",
          },
          styles.buttonStyle,
        ]}
      >
        <Text
          style={[
            { color: getSelectionMode == 1 ? "white" : "#766F6F" },
            styles.buttonTextStyle,
          ]}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => updateSwitchData(2)}
        style={[
          { backgroundColor: getSelectionMode == 2 ? "#232E6B" : "#FFFFFF" },
          styles.buttonStyle,
        ]}
      >
        <Text
          style={[
            { color: getSelectionMode == 2 ? "white" : "#766F6F" },
            styles.buttonTextStyle,
          ]}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomActionButtonFilter;

const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth: 1,
    borderColor: "#C7C3C3",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 10,

  },
  buttonTextStyle: {
    fontFamily: "Inter", 
    fontSize: 15
  }
});
