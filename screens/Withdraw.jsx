import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BankCard, BankList, Button, FormInputField, LoggedInContainer, Logo, Nav, TransactionCard } from "../components";
import { blackColor, dangerColor, grayColor, infoColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavNames, padding } from "../data/general";
import { TouchableOpacity } from "react-native";
import { AddCircle, AngleLeft, AngleRight, Money, SubtractIconCircle } from "../assets/icons";
import { Coin, CreditCardIcon, WalletBackground, WalletBanner } from "../assets/images";

const Header = () => {
    const {goBack, navigate} = useNavigation();
    return(

        <>

            

                <SafeAreaView style={{
                    paddingVertical: 15,
                    paddingHorizontal: padding,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 10
                }}>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 15
                    }}>

                        <TouchableOpacity onPress={()=>{
                            goBack();
                        }}>
                            <AngleLeft />

                        </TouchableOpacity>

                        <Text style={{
                            fontFamily: lato.bold.default,
                            fontSize: 20,
                        }}>Payment Methods</Text>

                    </View>
                        

                    {/* <TouchableOpacity onPress={()=>{
                        navigate(NavNames.CreditDetails.name)
                    }} style={{
                        backgroundColor: blackColor.opacity100,
                        borderRadius: 90,
                        alignItems: "center",
                        paddingVertical: 5,
                        paddingHorizontal: 11,
                        flexDirection: "row",
                        gap: 6

                    }}>

                        <Coin width={20} height={20} />
                        <Text style={{
                            color: blackColor.default,
                            fontFamily: lato.bold.default,
                            fontSize: 12,
                        }}>2500</Text>
                    </TouchableOpacity> */}

                </SafeAreaView>
        
        </>
    )
}

const Withdraw = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <LoggedInContainer showBackFunction headerText="Payment Methods" >

        <View style={{
            flex: 1
            
        }}>

            <Text style={{
                fontFamily: lato.regular.default,
                color: blackColor.opacity500,
                marginTop: 10
            }}>Choose your preferred payment method</Text>

            <View style={{
                flex: 1,
                marginTop: 15
            }}>



                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    gap: 25
                }}>

                    <TouchableOpacity onPress={()=>{

                        
                    }} style={{
                        paddingVertical: 15,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>

                        <View style={{
                            flexDirection: "row",
                            gap: 15,
                            alignItems: "center",

                        }}>

                            <Money size={28} />

                            <View style={{
                                gap: 4

                            }}>

                                <Text style={{
                                    fontFamily: lato.black.default
                                }}>Cash</Text>

                            </View>
                        </View>
                        
                        <View style={{
                            width: 15,
                            height: 15,
                            backgroundColor: blackColor.opacity100,
                            borderRadius: 50,
                            padding: 3
                        }}>

                            {<View style={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: primaryColor.default,
                                borderRadius: 100
                            }}></View>}

                        </View>
                    </TouchableOpacity>

                    <BankList />

                    <TouchableOpacity onPress={()=>{
                        navigate(NavNames.AddCard.name)
                    }} style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                    }}>

                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10
                        }}>

                            <CreditCardIcon size={28} />

                            <Text style={{
                                fontFamily: lato.regular.default,

                            }}>Add payment Card</Text>

                        </View>

                        <AngleRight />


                    </TouchableOpacity>



                </ScrollView>

            </View>
           

        </View>

    </LoggedInContainer>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
    actionButtonStyle:{
        
        backgroundColor: blackColor.opacity100,
        borderRadius: 10,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },

    actionButtonTextStyle:{
        
        fontFamily: lato.bold.default,

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
