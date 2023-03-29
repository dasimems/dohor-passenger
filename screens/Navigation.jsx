import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Nav } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";

const Navigation = () => {
  const { navigate } = useNavigation(); 
  return (
    <LoggedInContainer>
      <Text>Navigation</Text>
    </LoggedInContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
