import { 
  View, Text
} from "react-native";
import React from "react"; 
import RealEstateDetailsCard from "../../components/RealEstateDetailsCard";

const PropertyDetailsScreen = ({ navigation, route }) => {
  return (
    <>
      <RealEstateDetailsCard navigation={navigation} route={route}/>
    </>
  );
};

export default PropertyDetailsScreen; 
