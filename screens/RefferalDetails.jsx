import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Nav } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { RefererImage } from "../assets/images";

const RefferalDetails = () => {
  const { navigate } = useNavigation();
  return (
    <LoggedInContainer headerText="Refer and Earn" showBackFunction headerTextStyle={{
        marginLeft: 6
    }} containerStyle={{
      paddingVertical: 20
    }}>
        
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

        }}>

            <Image source={RefererImage} style={{
              flex: 1,
              // maxHeight: 300,
              resizeMode: "contain"

            }} />

        </View>

        <View style={{
          alignItems: 'center',
          gap: 20
        }}>

            <Text style={{
              fontFamily: lato.black.default,
              textAlign: "center",
              fontSize: 20,
              maxWidth: 200,

            }}>Earn credits with every referrals</Text>

            <Text style={{
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: "center",
              fontFamily: lato.bold.default,
              color: blackColor.opacity600,
              fontSize: 15
            }}>Share your referral  code with friends and loved ones and earn  free 100 credit that you can use to book a ride.</Text>

            <Pressable style={{
              alignItems: 'center',
              justifyContent: "center",
              width: "100%",
              borderRadius: 30,
              gap:5,
              padding: 15,
              backgroundColor: blackColor.opacity100,
            }}>

                <Text style={{
                  textAlign: "center",
                  fontFamily: lato.black.default,
                  fontSize: 25,
                }}>JOHNK32</Text>
                <Text style={{
                  textAlign: "center",
                  fontFamily: lato.regular.default,
                  color: blackColor.opacity500
                }}>Tap to copy your referral code</Text>


            </Pressable>

            <TouchableOpacity style={{
              padding: 15,
              backgroundColor: primaryColor.default,
              width: "100%",
              borderRadius: 15,
              alignItems: "center"
            }}>

              <Text style={{
                textAlign: "center",
                color: whiteColor.default,
                fontFamily: lato.bold.default

              }}>Share Referral Link</Text>

            </TouchableOpacity>

        </View>

    </LoggedInContainer>
  );
};

export default RefferalDetails;

const styles = StyleSheet.create({});
