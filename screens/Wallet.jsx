import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Nav } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { padding } from "../data/general";
import { TouchableOpacity } from "react-native";
import { AngleLeft, AngleRight } from "../assets/icons";
import { Coin, WalletBackground } from "../assets/images";

const Header = () => {
    const {goBack} = useNavigation();
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
                        }}>Wallet</Text>

                    </View>
                        

                    <View style={{
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
                    </View>

                </SafeAreaView>
        
        </>
    )
}

const Wallet = () => {
  const { navigate } = useNavigation();
  return (
    <LoggedInContainer containerStyle={{
        // paddingHorizontal: 0
    }} header={<Header />}>

        <View style={{
            // paddingHorizontal: padding
        }}>
            <View style={{
                position: "relative",
                width: "100%",
                height: 200,
                overflow: "hidden",
                borderRadius: 20,
                marginTop: 20,
                padding: 35,
                gap: 8,
                backgroundColor: "#E42C66",
            }}>

            <View style={{
                    width: 350,
                    height: 300,
                    position: "absolute",
                    top: -220,
                    right: -180,
                    backgroundColor: blackColor.opacity100,
                    borderRadius: 1000
            }} />

            <View style={{
                    width: 350,
                    height: 300,
                    position: "absolute",
                    bottom: -220,
                    left: -180,
                    backgroundColor: blackColor.opacity100,
                    borderRadius: 1000
            }} />
                

                <Text style={{
                    color: whiteColor.opacity700,
                    fontFamily: lato.regular.default,

                }}>
                    Current Balance
                </Text>

                <Text style={{
                    color: whiteColor.default,
                    fontFamily: lato.bold.default,
                    fontSize: 25

                }}>
                    $4,570,800
                </Text>

            </View>

        </View>

        <View style={{
            marginTop: 40,
            // padding: padding,
            gap: 15
        }}>
            <TouchableOpacity style={{
                ...styles.actionButtonStyle

            }}>

                <Text style={{
                    ...styles.actionButtonTextStyle

                }}>Payment Methods</Text>

                <AngleRight size={18} color={blackColor.opacity600} />

            </TouchableOpacity>

            <TouchableOpacity style={{
                ...styles.actionButtonStyle

            }}>

                <Text style={{
                    ...styles.actionButtonTextStyle

                }}>Coupon</Text>

                <AngleRight size={18} color={blackColor.opacity600} />

            </TouchableOpacity>

            <TouchableOpacity style={{
                ...styles.actionButtonStyle

            }}>

                <Text style={{
                    ...styles.actionButtonTextStyle

                }}>History</Text>

                <AngleRight size={18} color={blackColor.opacity600} />

            </TouchableOpacity>
        </View>

    </LoggedInContainer>
  );
};

export default Wallet;

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

    }
});