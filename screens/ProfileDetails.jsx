import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, FormInputField, LoggedInContainer, Logo, Nav, ProfileHeader } from "../components";
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

const ProfileDetails = () => {
  const { navigate } = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <LoggedInContainer
        navHidden
        header={<ProfileHeader />}
    >

        <View style={{
            gap: 20,
            marginTop: 15
        }}>

            <FormInputField labelStyle={{
                ...styles.labelStyle
            }} inputStyle={{
                ...styles.inputStyle,
                marginTop: 5
            }} label="Name" />

            <View>

                <Text style={{
                    ...styles.labelStyle
                }}>Select Gender</Text>    

                <Dropdown
                    
                    style={{
                        ...styles.inputStyle
                    }}
                    placeholderStyle={{
                        fontFamily: lato.regular.default,
                        color: blackColor.opacity200
                    }}
                    selectedTextStyle={{
                        fontFamily: lato.regular.default,
                        color: blackColor.default
                    }}
                    itemTextStyle={{
                        fontFamily: lato.regular.default,
                        color: blackColor.default

                    }}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select gender"
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    
                />
            </View>


        </View>

        
    </LoggedInContainer>
  );
};

export default ProfileDetails;

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
