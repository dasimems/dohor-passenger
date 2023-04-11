import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Nav } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";

const Template1 = () => {
  const { navigate } = useNavigation();
  return (
    <LoggedInContainer>
      <Text>Template</Text>
    </LoggedInContainer>
  );
};

export default Template1;

const styles = StyleSheet.create({});
