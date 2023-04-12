import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { Button, CountryList, CountrySelectDetails, FormInputField, Logo } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import allStyles from "../assets/stylesheet";
import { useActionContext, useFormContext } from "../context";
import { NavNames } from "../data/general";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
    const {navigate} = useNavigation();
    const {inputStyle} = allStyles;
    const { phone, setPhoneNumber } = useFormContext();
    const {openModal} = useActionContext();

    const showCountryList = useCallback(()=>{
      openModal({content: <CountryList />, height: "80%"});
    }, [])

  return (
    <SafeAreaView
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

            <Logo image imageSize={70} />

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
                }}>DOHOR</Text>, enter your details below to continue.</Text>
            </View>

            <View style={{
                width: "100%"
            }}>
                <FormInputField  inputMode="numeric"  keyboardType="phone-pad" onChangeText={(text)=>{
                    setPhoneNumber(text);
                }} value={phone} floatLeftIcon={<CountrySelectDetails />} leftIconAction={()=>{
                  showCountryList();

                }} placeholder="Enter your phone number" inputStyle={{
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

      {/* <View style={{
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 5,
        flexDirection: "row",
        gap: 5
      }}>
        <Text style={{
          fontFamily: lato.bold.default,
          color: blackColor.opacity600
        }}>Don't have an account? </Text>

        <TouchableOpacity onPress={()=>{
          navigate(NavNames.Register.name)
        }}>

          <Text style={{
            fontFamily: lato.bold.default,
            color: primaryColor.default
          }}>Register</Text>

        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
