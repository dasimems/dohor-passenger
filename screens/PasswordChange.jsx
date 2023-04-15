import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Button,
  FormInputField,
  LoggedInContainer,
  Logo,
  Nav,
  ProfileHeader
} from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { AngleDown } from "../assets/icons";

const data = [
  { label: "None", value: "" },
  { label: "Male", value: "male" },
  { label: "Female", value: "female" }
];

const PasswordChange = () => {
  const { navigate } = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <LoggedInContainer navHidden header={<ProfileHeader text="Change Password" />}>
      <View
        style={{
          gap: 20,
          marginTop: 15
        }}
      >
        <FormInputField
          labelStyle={{
            ...styles.labelStyle
          }}
          secureTextEntry
          inputStyle={{
            ...styles.inputStyle,
            marginTop: 5
          }}
          label="Old Password"
          placeholder="Input old password"
        />

        <FormInputField
          labelStyle={{
            ...styles.labelStyle
          }}
          secureTextEntry
          inputStyle={{
            ...styles.inputStyle,
            marginTop: 5
          }}
          label="New Password"
          placeholder="Input new password"
        />

        <FormInputField
          labelStyle={{
            ...styles.labelStyle
          }}
          secureTextEntry
          inputStyle={{
            ...styles.inputStyle,
            marginTop: 5
          }}
          label="Repeat Password"
          placeholder="Input new password"
        />

        
      </View>
    </LoggedInContainer>
  );
};

export default PasswordChange;

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: lato.bold.default,
    fontSize: 13
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: blackColor.opacity100,
    backgroundColor: "rgba(0, 0, 0, .05)",
    paddingVertical: 8,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 10
  }
});
