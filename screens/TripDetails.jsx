import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, LoggedInContainer, Logo, Nav, RoundedImage, TripCard } from "../components";
import { blackColor, dangerColor, primaryColor, successColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { trips } from "../data/tripsData";
import { padding } from "../data/general";
import { StarIcon } from "../assets/icons";
import { MaleAvatarOne } from "../assets/images";

const TripDetails = () => {
  const { navigate, goBack } = useNavigation();
  const {params} = useRoute()
  const {id} = params;
  const [details, setDetails] = useState(null)

  useEffect(()=>{

    if(id){
        var tripDetails = trips.find(trip => trip.id === id);

        if(tripDetails){
            setDetails(tripDetails)
        }else{
            goBack();
        }
    }else{
        goBack();
    }

  }, [id])
  return (
    <LoggedInContainer headerText={"Trip Details"} containerStyle={{
        paddingHorizontal: 0
    }} showBackFunction headerTextStyle={16}>

        <ScrollView>

            <Text style={{
                backgroundColor: "rgba(0, 0, 0, .05)",
                textAlign: "center",
                marginTop: 7,
                fontSize: 12,
                paddingVertical: 4,
                paddingHorizontal: 10,
                color: details && details.status && details.status.toLowerCase() === "completed"? successColor.opacity800 : dangerColor.opacity800

            }}>{details && details.status && details.status.toLowerCase() === "completed"? "TRIP COMPLETED": "TRIP CANCELLED"}</Text>

            <View style={{
                paddingHorizontal: padding,
            }}>
                <TripCard plain id={details?.id} price={details?.price} to={details?.trip?.to} from={details?.trip?.from} />


            </View>

            <View style={{
                width: "100%",
                height: 200,
                backgroundColor: blackColor.opacity100
            }}></View>

            <View style={{
                paddingHorizontal: padding,
                paddingVertical: 15,
                gap: 20
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                }}>

                    <Text style={{
                        fontFamily: lato.bold.default,
                    }}>Distance</Text>
                    <Text style={{
                        fontFamily: lato.regular.default,
                        color: blackColor.opacity600
                    }}>10.4km</Text>

                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                }}>

                    <Text style={{
                        fontFamily: lato.bold.default,
                    }}>Duration</Text>
                    <Text style={{
                        fontFamily: lato.regular.default,
                        color: blackColor.opacity600
                    }}>20 mins</Text>

                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                }}>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 6

                    }}>

                        <RoundedImage image={MaleAvatarOne} size={40} />

                        <Text style={{
                            fontFamily: lato.bold.default,
                            color: blackColor.opacity600
                        }}>{details?.passengerName}</Text>

                        
                    </View>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3

                    }}>

                        <StarIcon size={12} color="#FFBA40" set="bold" />

                        <Text style={{
                            fontFamily: lato.regular.default,
                            color: blackColor.opacity600
                        }}>{4.9}</Text>

                        
                    </View>

                </View>

            </View>

        </ScrollView>

      
    </LoggedInContainer>
  );
};

export default TripDetails;

const styles = StyleSheet.create({});
