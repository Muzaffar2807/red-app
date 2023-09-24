import { View, Text } from "react-native";
import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// create the context
const AppContext = createContext();

const AppProvider = (props) => {



  const [allPropertiesData, setAllPropertiesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [allPropertiesDataLength, setAllPropertiesDataLength] = useState("");

  const [forToastLoading, setForToastLoading] = useState(false);

  //get all property
  async function getAllProperties() {
    try {
      const response = await axios.get(
        "https://prickly-mite-garment.cyclic.app/api/property/allproperty"
      );
      //new first sort
      const sortedData = response.data.property.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        if (a.createdAt < b.createdAt) {
          return 1;
        }
        return 0;
      });
      setAllPropertiesData(sortedData);
      setAllPropertiesDataLength(sortedData.length);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllProperties();
  }, [allPropertiesData]);

  //add properties
  const addProperties = async (
    Action,
    PropertyType,
    SelectCategory,
    Price,
    Location,
    Address,
    Description,
    Photos,
    User,
    navigation,
    setAddPropertyLoading,
    showToastWhenAdded
  ) => {
    try {
      setAddPropertyLoading(true);
      const formData = new FormData();
      formData.append("Action", Action);
      formData.append("PropertyType", PropertyType);
      formData.append("SelectCategory", SelectCategory);
      formData.append("Price", Price);
      formData.append("Location", Location);
      formData.append("Address", Address);
      formData.append("Description", Description);
      Photos.forEach((photo) => {
        formData.append("Photos", {
          uri: photo.uri,
          type: "image/jpeg",
          name: "imagename.jpg",
        });
      });
      formData.append("User", User);
      //console.log(formData);
      await fetch(
        "https://prickly-mite-garment.cyclic.app/api/property/sellproperty",
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((res) => {
          //console.log(res);
          setAddPropertyLoading(false);
          navigation.goBack();
          navigation.goBack();
          navigation.goBack();
          navigation.navigate("Home");
          console.log("Property Added SuccessFully");
          showToastWhenAdded();
        });
    } catch (error) {
      console.log(`From add Properties ${error}`);
      setForToastLoading(false);
    }
  };

   

  return (
    <AppContext.Provider
      value={{
        allPropertiesData,
        isLoading,
        addProperties,
        allPropertiesDataLength,
        forToastLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
