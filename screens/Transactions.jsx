import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Nav, TransactionCard } from "../components";
import { blackColor, dangerColor, grayColor, infoColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavNames, padding } from "../data/general";
import { TouchableOpacity } from "react-native";
import { AddCircle, AngleLeft, AngleRight, SubtractIconCircle } from "../assets/icons";
import { Coin, WalletBackground, WalletBanner } from "../assets/images";

const Transactions = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <LoggedInContainer headerText="Transactions" showBackFunction={true} containerStyle={{
        // paddingHorizontal: 0
    }} >

        <View style={{
            flex: 1,
            paddingVertical: 15,
            
        }}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                gap: 25
            }}>
                

                <View>

                    <Text style={{
                        ...styles.timeFilterStyle,
                    }}>
                        June 14
                    </Text>

                    <TransactionCard title="Fare from rider" price="75" time={Date.now()} type="credit" />
                    <TransactionCard title="Transfer to bank" price="300" time={Date.now()} type="debit" />
                </View>

                <View>

                    <Text style={{
                        ...styles.timeFilterStyle,
                    }}>
                        June 12
                    </Text>

                    <TransactionCard title="Fare from parcel sender" price="75" time={Date.now()} type="credit" />
                    <TransactionCard title="Transfer to bank" price="400" time={Date.now()} type="debit" />

                </View>



            </ScrollView>
           

        </View>

    </LoggedInContainer>
  );
};

export default Transactions;

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
