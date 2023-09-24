import { View, Text } from "react-native";
import React, { useEffect, useState, createContext } from "react";
import { BASE_URL } from "../config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children, navigation }) => {
  const [IsLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userToken, setUserToken] = useState(null);

  //Signin
  const signin = (MobileNumber, Password) => {
    setIsLoading(true);
    axios
      .post(
        `${BASE_URL}/signin`,
        {
          MobileNumber,
          Password,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        //console.log(res);
        let userInfo = res.data;
        //console.log(userInfo)
        let userInfoKey = res.data.token;
        //console.log(userInfoKey)
        setUserInfo(userInfo);
        setUserToken(userInfoKey);

        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", userInfoKey);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Loggin Error ${e}`);
        setIsLoading(false);
      });
  };

  //keeping user loged in
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      let userToken = await AsyncStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  //Signup
  const signup = (Name, Email, Password, MobileNumber, Photos) => {
    setIsLoading(true);
    axios
      .post(
        `${BASE_URL}/signup`,
        {
          Name,
          Email,
          Password,
          MobileNumber,
          Photos
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        setIsLoading(true)
        let userInfo = res.data;
        //console.log(userInfo)
        let userInfoKey = res.data.token;
        //console.log(userInfoKey)
        setUserInfo(userInfo);
        setUserToken(userInfoKey);

        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", userInfoKey);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Register Error ${e}`);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  //Logout
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  

  return (
    <AuthContext.Provider
      value={{ userToken, signin, signup, userInfo, IsLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
