import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import SafeViewAndroid from '../../components/SafeViewAndroid';
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

const SeeAllPage = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 30 }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={25} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, marginLeft: 20 }}>See All Page</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default SeeAllPage