import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, CountrySelectDetails, FormInputField, Logo2 } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import allStyles from "../assets/stylesheet";
import { useFormContext } from "../context";
import { NavNames } from "../data/general";

const Login = () => {
    const {navigate} = useNavigation();
    const {inputStyle} = allStyles;
    const { phone, setPhoneNumber } = useFormContext();
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
            alignItems: "center",
            gap: 50,
            justifyContent: "space-between"
          }}
        >

            <Logo2 />

            <View>
                <Text style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontFamily: lato.bold.default
                }}>Login to your account</Text>
                <Text style={{
                    textAlign: "center",
                    fontSize: 17,
                    marginTop: 20,
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity700
                }}>Welcome back to <Text style={{
                    fontFamily: lato.bold.default
                }}>PAXI</Text>, enter your details below to continue.</Text>
            </View>

            <View style={{
                width: "100%"
            }}>
                <FormInputField  inputMode="numeric"  keyboardType="phone-pad" onChangeText={(text)=>{
                    setPhoneNumber(text);
                }} value={phone} floatLeftIcon={<CountrySelectDetails />} placeholder="Enter your phone number" inputStyle={{
                    ...inputStyle,
                    borderWidth: 0 
                }} label="Enter your phone" labelStyle={{
                    fontFamily: lato.bold.default,
                    marginBottom: 5
                }} />
            </View>
          
          

        </ScrollView>
      </View>

      <Button
        disabled={phone.length < 9}
        onPress={()=>{
            navigate(NavNames.OTP.name)
        }}
        textColor={whiteColor.default}
        style={{
          backgroundColor: primaryColor.default,
          marginTop: 100
        }}
        text="CONTINUE"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
