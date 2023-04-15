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

const VehicleDetails = () => {
  const { navigate } = useNavigation();
  const [value, setValue] = useState({
    vehicleType: "",
    brand: "",
    model: "",
    number: "",
    insuranceNumber: "",
  });
  const [loading, setLoading] = useState(false);

  return (
    <LoggedInContainer navHidden header={<ProfileHeader textHidden actionButtonHidden />} containerStyle={{
        paddingBottom: 20,
        flex: 1
    }}>
      <ScrollView
        contentContainerStyle={{
          gap: 20,
          marginTop: 0,
        }}
      >

        <View
            style={{
                alignItems: "center",
                gap: 20

            }}
        >

            <Logo image imageSize={80} />

            <View style={{
                gap: 15
            }}>
                <Text style={{
                    ...styles.headingTextStyle,
                    fontFamily: lato.black.default,
                    fontSize: 17

                }}>Vehicle details</Text>
                <Text style={{
                    ...styles.headingTextStyle,
                    color: blackColor.opacity500

                }}>Add vehicle information here</Text>
            </View>

        </View>
        

        <View>
        <Text
            style={{
            ...styles.labelStyle
            }}
        >
            Vehicle type
        </Text>

        <Dropdown
            style={{
            ...styles.inputStyle,
            paddingVertical: 5
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
            placeholder="Select type"
            value={value.vehicleType}
            onChange={item => {
            setValue(prevState =>({
                ...prevState,
                vehicleType: item.value
            }));
            }}
        />
        </View>

        <View>
        <Text
            style={{
            ...styles.labelStyle
            }}
        >
            Brand
        </Text>

        <Dropdown
            style={{
            ...styles.inputStyle,
            paddingVertical: 5
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
            placeholder="Select type"
            value={value.brand}
            onChange={item => {
            setValue(prevState =>({
                ...prevState,
                brand: item.value
            }));
            }}
        />
        </View>

        <View>
        <Text
            style={{
            ...styles.labelStyle
            }}
        >
            Model
        </Text>

        <Dropdown
            style={{
            ...styles.inputStyle,
            paddingVertical: 5
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
            placeholder="Select type"
            value={value.model}
            onChange={item => {
            setValue(prevState =>({
                ...prevState,
                model: item.value
            }));
            }}
        />
        </View>

        <FormInputField
        labelStyle={{
            ...styles.labelStyle
        }}
        inputStyle={{
            ...styles.inputStyle,
            marginTop: 5
        }}
        label="Number"
        placeholder="Enter number"
        />

        <FormInputField
        labelStyle={{
            ...styles.labelStyle
        }}
        inputStyle={{
            ...styles.inputStyle,
            marginTop: 5
        }}
        label="Insurance Number"
        placeholder="Enter number"
        />

      </ScrollView>
        <Button onPress={()=>{

        }} loading={loading} loaderSize={21} loadingStyle={{
            backgroundColor: primaryColor.opacity400,
            borderRadius: 5
        }} style={{
            backgroundColor: primaryColor.default,
            borderRadius: 5,
            marginTop: 20
        }}>
            <Text style={{
                fontFamily: lato.regular.default,
                color: loading? blackColor.opacity400 : blackColor.default,
                fontSize: 16

            }}>{loading? "Saving" : "Save"}</Text>

        </Button>
    </LoggedInContainer>
  );
};

export default VehicleDetails;

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
  },

  headingTextStyle: {
    textAlign: "center",
    fontFamily: lato.bold.default,

  }
});
