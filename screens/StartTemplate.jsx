import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Logo } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";

const StartTemplate = () => {
    
    const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: whiteColor.default
      }}
    >
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            gap: 50,
            justifyContent: "space-between"
          }}
        ></ScrollView>
      </View>

      <Button
        textColor={whiteColor.default}
        style={{
          backgroundColor: primaryColor.default,
          marginTop: 100
        }}
        text="GET STARTED"
      />
    </View>
  );
};

export default StartTemplate;

const styles = StyleSheet.create({});
