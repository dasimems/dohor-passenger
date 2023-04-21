import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Button, LoggedInContainer, Logo, Nav, RatingBar } from "../components";
import { blackColor, dangerColor, primaryColor, successColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CancelIcon2, CheckIcon, StarIcon } from "../assets/icons";

const ExtraRateDetails = () => {
  const { navigate, goBack } = useNavigation();
  const {params} = useRoute()
  const {type} = params;

  useEffect(()=>{
    if(!type){
        goBack();
    }
  },[type])

  return (
    <LoggedInContainer
      headerText={`${type && type.toLowerCase() === "cancel"? "Cancellation": "Acceptance"} Rate`}
      showBackFunction
      headerTextStyle={{ fontSize: 17 }}
    >
      <ScrollView>
        <View style={{ paddingVertical: 60,  gap: 10, alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Text style={{ fontFamily: lato.bold.default, fontSize: 40 }}>
              {type && type.toLowerCase() === "cancel"? "8%" : "92%" }
            </Text>
          </View>

          <Text
            style={{
              textAlign: "center",
              marginLeft: -15,
              fontFamily: lato.regular.default,
              color: blackColor.opacity600
            }}
          >
            Dec 3 - Jan 2
          </Text>
        </View>

        <View
          style={{
            gap: 30,
            justifyContent: "space-between",
            flexDirection: "row",
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: blackColor.opacity100
          }}
        >

            <Text style={{
                fontFamily: lato.bold.default,
            }}>Trip requested</Text>
            <Text style={{
                fontFamily: lato.bold.default,
                color: blackColor.opacity600
            }}>3,251</Text>
          
        </View>
        

        <View
          style={{
            gap: 30,
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: 20,
          }}
        >


            <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6
            }}>

                <CheckIcon color={successColor.default} size={15} />

                <Text style={{
                    fontFamily: lato.bold.default,
                }}>Accepted</Text>

            </View>
            <Text style={{
                fontFamily: lato.bold.default,
                color: blackColor.opacity600
            }}>3,248</Text>
          
        </View>

        <View
          style={{
            gap: 30,
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: 20,
          }}
        >


            <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6
            }}>

                <CancelIcon2 color={dangerColor.default} size={15} />

                <Text style={{
                    fontFamily: lato.bold.default,
                }}>Rejected</Text>

            </View>
            <Text style={{
                fontFamily: lato.bold.default,
                color: blackColor.opacity600
            }}>3</Text>
          
        </View>

        
      </ScrollView>
    </LoggedInContainer>
  );
};

export default ExtraRateDetails;

const styles = StyleSheet.create({});
