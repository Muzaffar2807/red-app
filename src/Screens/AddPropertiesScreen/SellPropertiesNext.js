import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Modal,
} from "react-native";
import { useToast } from "react-native-styled-toast";
import React, { useState, useEffect, useContext } from "react";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as Camera from "expo-camera";
import SelectedImagesComponent from "../../components/SelectedImagesComponent";
import { ActivityIndicator } from "react-native-paper";
import { AppContext } from "../../context/AppContext";

const heightWindow = Dimensions.get("screen").height;

const SellPropertiesNext = ({ navigation, route }) => {
  const { toast } = useToast();
  const FullPropertyDetails = route.params?.addPropertyDetials;

  //for storing the selected images from the user
  const [selectedImages, setSelectedImages] = useState([]);

  const [isLoadingImage, setIslLoadingImage] = useState(false);

  const [notSelected, setNotSelected] = useState(false);

  const { addProperties } = useContext(AppContext);

  //selecting from phone media
  const selectImage = async () => {
    setIslLoadingImage(true);
    try {
      const cameraRollPermission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (cameraRollPermission.granted) {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        if (cameraPermission.granted) {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 0.5,
            allowsMultipleSelection: true,
          });
          //console.log(result.selected);
          if (result.selected) {
            setSelectedImages([...selectedImages, ...result.selected]);
            setNotSelected(false);
          } else {
            setSelectedImages([...selectedImages, result]);
            setNotSelected(false);
          }
          if (result.cancelled) {
            console.log("Please select Property Images");
            setNotSelected(true);
            showToast();
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
    setIslLoadingImage(false);
  };

  /* console.log(withoutPhotos); */

  //taking photo with camera
  const takePhoto = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      if (status === "granted") {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.cancelled) {
          setSelectedImages([...selectedImages, { localUri: result.assets }]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //removing Image
  const removeImage = (uri) => {
    setSelectedImages(selectedImages.filter((image) => image.uri !== uri));
  };

  const {
    Action,
    PropertyType,
    SelectCategory,
    Price,
    Location,
    Address,
    Description,
    Photos,
    User,
  } = FullPropertyDetails;

  FullPropertyDetails.Photos = selectedImages;

  const [addPropertyLoading, setAddPropertyLoading] = useState(false);

  //for showing toast
  const showToastWhenAdded = () => {
    toast({
      message: "Successfully Added!",
      duration: 3000,
      toastStyles: {
        bg: "lightgreen",
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 0,
      },
      color: "black",
      iconColor: "black",
      iconFamily: "Ionicons",
      iconName: "md-checkmark-done-sharp",
      iconSize: 30,
      closeIconFamily: "Ionicons",
      closeIconName: "close",
      closeIconColor: "black",
      hideAccent: true,
    });
  };

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.Propertyheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color="#000000" />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 21,
            color: "#000000",
            fontFamily: "InterMedium",
          }}
        >
          Add Properties
        </Text>
        <Text>
          Step 3<Text style={{ color: "#A69A9A" }}>/3</Text>
        </Text>
      </View>

      <View style={styles.mainWrapper}>
        <TouchableOpacity
          onPress={() => {
            selectImage();
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              justifyContent: "center",
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderStyle: "dotted",
              borderRadius: 15,
              borderColor: "#000000",
            }}
          >
            <Text
              style={{
                fontFamily: "InterMedium",
                fontSize: 17,
                color: "#1F215D",
                paddingRight: 26,
              }}
            >
              Upload Image
            </Text>
            <Ionicons name="cloud-upload-outline" size={24} color="#1F215D" />
          </View>
        </TouchableOpacity>

        <View style={{ paddingBottom: 230 }}>
          {isLoadingImage === true ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 150,
              }}
            >
              <ActivityIndicator color="#000" size={40} />
            </View>
          ) : (
            <SelectedImagesComponent
              selectedImages={selectedImages}
              removeImage={removeImage}
              notSelected={notSelected}
            />
          )}
        </View>
      </View>

      {selectedImages.length > 0 && !notSelected ? (
        <TouchableOpacity
          style={{
            position: "absolute",
            top: heightWindow - 150,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            backgroundColor: "#000000",
            width: 220,
            height: 54,
            borderRadius: 55,
            marginLeft: "20%",
          }}
          onPress={() => {
            addProperties(
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
            );
          }}
        >
          {addPropertyLoading ? (
            <>
              <ActivityIndicator color="#FFFFFF" />
            </>
          ) : (
            <Text
              style={{ color: "#fff", fontFamily: "InterBold", fontSize: 18 }}
            >
              Add Property
            </Text>
          )}
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default SellPropertiesNext;

const styles = StyleSheet.create({
  Propertyheader: {
    paddingHorizontal: 30,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapperContainer: {
    paddingHorizontal: 30,
  },
  mainWrapper: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  deleteSelectedImage: {
    position: "absolute",
    zIndex: 1,
    marginLeft: 130,
  },
});
