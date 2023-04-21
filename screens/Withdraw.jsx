import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BankList, Button, FormInputField, LoggedInContainer, Logo, Nav, TransactionCard } from "../components";
import { blackColor, dangerColor, grayColor, infoColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavNames, padding } from "../data/general";
import { TouchableOpacity } from "react-native";
import { AddCircle, AngleLeft, AngleRight, SubtractIconCircle } from "../assets/icons";
import { Coin, WalletBackground, WalletBanner } from "../assets/images";

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
                        }}>Withdraw</Text>

                    </View>
                        

                    <TouchableOpacity onPress={()=>{
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
                    </TouchableOpacity>

                </SafeAreaView>
        
        </>
    )
}

const Withdraw = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <LoggedInContainer headerHidden containerStyle={{
        paddingHorizontal: 0
    }} >

        <View style={{
            flex: 1
            
        }}>

            <View style={{
                width: "100%",
                height: 300,
                overflow: "hidden",
            }}>

                <Image source={WalletBanner} style={{
                    ...StyleSheet.absoluteFillObject,
                    height: "100%",
                    width: "100%"
                }} />

                <Header />

                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    // backgroundColor: "red",
                    paddingBottom: 50,
                }}>

                    <View style={{
                        
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: "center"
                    }}>

                        <Text style={{
                            ...styles.walletBannerTextStyle,
                            color: blackColor.opacity400
                        }}>Available Balance is </Text>
                        <Text style={{
                            ...styles.walletBannerTextStyle
                        }}>$7,500</Text>
                    </View>

                </View>


            </View>

            <View style={{
                alignItems: "center",
                marginTop: -29,
            }}>
                <FormInputField inputMode="numeric" keyboardType="number-pad" placeholder="Enter Amount($)" style={{
                    width: "100%",
                    maxWidth: 270,

                }} inputStyle={{
                    textAlign: "center",
                    borderColor: "rgba(0, 0, 0, .06)",
                    backgroundColor: whiteColor.default
                }} />
            </View>

            <View style={{
                flex: 1,
                padding,
                paddingVertical: 20,
                paddingTop: 30
            }}>



                <ScrollView contentContainerStyle={{
                    gap: 25
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
    
                        <Text style={{
                            fontFamily: lato.bold.default,
                            color: blackColor.opacity600
                        }}>Choose bank account</Text>
    
                        <TouchableOpacity>
                            <Text style={{
                                fontFamily: lato.regular.default,
                                color: dangerColor.opacity500
                            }}>Add new</Text>
    
                        </TouchableOpacity>
    
                    </View>

                    <BankList />



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
