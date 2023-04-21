import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { BankList, Button, FormInputField, LoggedInContainer, Logo, Nav, TransactionCard } from "../components";
import { blackColor, dangerColor, grayColor, infoColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavNames, padding } from "../data/general";
import { TouchableOpacity } from "react-native";
import { AddCircle, AngleDown, AngleLeft, AngleRight, SubtractIconCircle } from "../assets/icons";
import { Coin, WalletBackground, WalletBanner } from "../assets/images";



const NewBank = () => {
  const { navigate, goBack } = useNavigation();
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  return (
    <LoggedInContainer headerTextStyle={{
        fontSize: 18,
        marginLeft: 10,
    }} headerText="Add new bank" showBackFunction containerStyle={{
        // paddingHorizontal: 0
    }} >

        <View style={{
            flex: 1,
            paddingVertical: 15,
            
        }}>

            <View style={{
                flex: 1,
            }}>

                <Text style={{
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity500
                }}>Kindly provide your bank account details  where you can easily withdraw your money to</Text>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    gap: 10,
                    paddingVertical: 10
                }}>

                    <FormInputField 
                        placeholder="Bank Name"
                        floatRightIcon={<AngleDown color={blackColor.opacity500} />}
                        inputStyle={{
                            backgroundColor: "rgba(0, 0, 0, .05)",
                            borderWidth: 0
                        }}

                    />

                    <FormInputField 
                        placeholder="Account Type"
                        floatRightIcon={<AngleDown color={blackColor.opacity500} />}
                        inputStyle={{
                            backgroundColor: "rgba(0, 0, 0, .05)",
                            borderWidth: 0
                        }}

                    />

                    <FormInputField 
                        placeholder="Account Number"
                        inputMode="numeric"
                        keyboardType="number-pad"
                        inputStyle={{
                            backgroundColor: "rgba(0, 0, 0, .05)",
                            borderWidth: 0
                        }}

                    />

                    <FormInputField 
                        placeholder="Account holder's name"
                        inputMode="text"
                        inputStyle={{
                            backgroundColor: "rgba(0, 0, 0, .05)",
                            borderWidth: 0
                        }}

                    />

                </ScrollView>
            </View>

            <View>

                <Button loadingStyle={{
                    ...styles.actionButtonStyle,
                    backgroundColor: primaryColor.opacity500
                }} loading={loading} loaderSize={18} disabled={disabled} style={{
                    ...styles.actionButtonStyle

                }}>
                    <Text style={{
                        ...styles.actionButtonTextStyle,
                        color: (loading || disabled)? whiteColor.opacity700 : whiteColor.default
                    }}>Save</Text>
                </Button>

            </View>

           

        </View>

    </LoggedInContainer>
  );
};

export default NewBank;

const styles = StyleSheet.create({
    actionButtonStyle:{
        
        backgroundColor: primaryColor.default,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },

    actionButtonTextStyle:{
        
        fontFamily: lato.bold.default,
        color: whiteColor.default

    },

    timeFilterStyle:{
        
        fontFamily: lato.bold.default,
        color: blackColor.opacity400,
        marginBottom: 5
    },
    walletBannerTextStyle: {
        fontFamily: lato.black.default,
        fontSize: 14,
        textAlign: "center",
        color: blackColor.opacity600
    }
});
