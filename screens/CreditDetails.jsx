import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Nav } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { Coin } from "../assets/images";
import { ConvertIcon, Wallet } from "../assets/icons";

const CreditDetails = () => {
  const { navigate } = useNavigation();
  return (
    <LoggedInContainer
        showBackFunction
        headerText="Credit"
        spacing={10}
        headerTextStyle={{
            fontSize: 19,
            fontFamily: lato.bold.default
        }}
        containerStyle={{
            paddingVertical: 20
        }}
    >
      <ScrollView contentContainerStyle={{
        gap: 15
      }}>

        <View style={{
            padding: 20,
            backgroundColor: blackColor.opacity100,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            height: 150,
            flexDirection: 'row',
            gap: 10
        }}>

            <Coin width={70} height={70}/>

            <View>
                <Text style={{
                    fontFamily: lato.black.default,
                    fontSize: 30
                }}>2500</Text>
                <Text style={{
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity400
                }}>$1000</Text>
            </View>

        </View>

        <Button style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            backgroundColor: primaryColor.default

        }}>

            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                gap: 4
            }}>

                <Text style={{
                    fontFamily: lato.bold.default,
                    color: whiteColor.default
                }}>Convert</Text>

                <ConvertIcon color={whiteColor.default} size={14} />
            </View>
        </Button>

        <Button style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            backgroundColor: primaryColor.default

        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                gap: 4
            }}>

                <Text style={{
                    fontFamily: lato.bold.default,
                    color: whiteColor.default
                }}>Transfer</Text>

                <Wallet color={whiteColor.default} size={14} />

            </View>
        </Button>

      </ScrollView>
    </LoggedInContainer>
  );
};

export default CreditDetails;

const styles = StyleSheet.create({});
