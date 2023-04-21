import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Nav, ReviewList, Stats, TransactionCard } from "../components";
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
                        }}>Ratings</Text>

                    </View>

                </SafeAreaView>
        
        </>
    )
}

const Rating = () => {
  const { navigate, goBack } = useNavigation();

  const stats = [
    {
        stat: "4.9",
        label: "Rate",
        action: ()=> navigate(NavNames.RatingDetails.name)
    },

    {
        stat: "92%",
        label: "Acceptance",
        action: ()=> navigate(NavNames.Ratings.name)
    },

    {
        stat: "8%",
        label: "Cancellation",
        action: ()=> navigate(NavNames.Ratings.name)
    }
  ]

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
                    gap: 7
                }}>

                    <Text style={{
                        fontFamily: lato.black.default,
                        fontSize: 35,
                        textAlign: "center",
                        color: primaryColor.default
                    }}>3, 251</Text>

                    <Text style={{
                        textAlign: "center",
                        color: blackColor.opacity500,
                        fontFamily: lato.regular.default
                    }}>Trips</Text>
                </View>


            </View>

            <View style={{
                alignItems: "center",
                marginTop: -29,
                paddingHorizontal: padding
            }}>
                <Stats stats={stats} style={{
                    shadowColor: blackColor.opacity500,
                    borderColor: "rgba(0, 0, 0, .01)",
                }} />
            </View>

            <View style={{
                flex: 1,
                paddingHorizontal: padding,
                paddingTop: 30
            }}>



                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    gap: 5
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
    
                        <Text style={{
                            fontFamily: lato.bold.default,
                            color: blackColor.opacity600
                        }}>Recent Reviews</Text>
    
                        
    
                    </View>

                    <ReviewList />



                </ScrollView>

            </View>
           

        </View>

    </LoggedInContainer>
  );
};

export default Rating;

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
    }
});
