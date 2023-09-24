import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

const SelectedImagesComponent = ({
  selectedImages,
  removeImage,
  notSelected,
}) => {
  return (
    <FlatList
      data={selectedImages}
      keyExtractor={(item) => item.uri}
      numColumns={2}
      renderItem={({ item }) => (
        <View
          style={{
            paddingHorizontal: 5,
            width: "50%",
            marginTop: 20,
            marginBottom: 10,
          }}
        >

          {selectedImages.length > 0 && !notSelected ? ( <TouchableOpacity
            onPress={() => removeImage(item.uri)}
            style={{
              position: "absolute",
              right: 5,
              zIndex: 1,
              top: -20,
            }}
          >
            <Ionicons name="close" size={25} />
          </TouchableOpacity>) : (<></>)}
         

          <Image
            source={{ uri: item.uri }}
            style={[{ aspectRatio: 1, width: 145, borderRadius: 30 }]}
          />
        </View>
      )}
    />
  );
};

export default SelectedImagesComponent;
