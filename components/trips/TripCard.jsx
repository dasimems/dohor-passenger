import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { blackColor, dangerColor, pendingColor, successColor, whiteColor } from "../../assets/colors";
import { formatDate } from "../../functions";
import { lato } from "../../fonts";
import { DotIcon, LocationIcon, MoneyIcon } from "../../assets/icons";
import { NavNames } from "../../data/general";
import { useNavigation } from "@react-navigation/native";

const TripCard = ({ date, name, id, price, image, from, to, status, plain }) => {
  const imageWidth = 50;
  const viewGap = 20;
  const [statusColor, setStatusColor] = useState(pendingColor.default)
  const {navigate} = useNavigation()

  useEffect(()=>{

    if(status){

      if(status.toLowerCase() === "completed"){
        setStatusColor(successColor.default)
      }else if(status.toLowerCase() === "cancelled"){
        setStatusColor(dangerColor.default)
      }
    }


  }, [status])

  return (
    <TouchableOpacity
      onPress={()=>{
        navigate(NavNames.TripsDetails.name, {id});
      }}
      style={{
        elevation: 2,
        shadowColor: !plain? blackColor.opacity300 : "transparent",
        shadowOffset: {
          width: 0,
          height: 1
        },

        shadowOpacity: 0.1,
        shadowRadius: 10,
        borderRadius: 17,
        overflow: "hidden",
        padding: 2
      }}
    >
      <View
        style={{
          backgroundColor: whiteColor.default,
          // borderColor:blackColor.opacity100,
          // borderWidth:1,
          padding: 5,
          borderRadius: 15
        }}
      >
        

        <View
          style={{
            gap: 10,
            borderBottomColor: blackColor.opacity100,
            borderBottomWidth: 1,
            padding: 15,
          }}
        >

          <View
            style={{
              height: 80,
              flexDirection: "row",
              gap: viewGap,
              alignItems: "flex-end",
              justifyContent: "space-between"
            }}
          >

            <View style={{
                flexDirection: "row",
                gap: viewGap,
                height: "100%"
            }}>

                <View
                style={{
                    width: "auto",
                    height: "100%",
                    alignItems: "center",
                    gap: 5,
                }}
                >
                <View
                    style={{
                      borderRadius: 9999
                    }}
                >

                    <DotIcon color={successColor.default} />

                </View>

                <View style={{flex:1, gap: 5 }}>

                  <View style={{
                    ...styles.lineStyle
                  }}></View>

                  <View style={{
                    ...styles.lineStyle
                  }}></View>

                  <View style={{
                    ...styles.lineStyle
                  }}></View>

                  <View style={{
                    ...styles.lineStyle
                  }}></View>


                </View>

                <View
                    style={{
                    // backgroundColor: dangerColor.default,
                    borderRadius: 9999
                    }}
                />

                    <LocationIcon color={dangerColor.opacity700} set="bold"  />
                </View>

                <View style={{
                    height: "100%",
                    justifyContent: "space-between"
                }}>

                    <View
                        style={{
                            gap: 2
                        }}
                    >

                        <Text style={{
                            fontFamily: lato.bold.default,
                            fontSize: 13,

                        }}>{from?.place}</Text>

                    </View>

                    <View
                        style={{
                            gap: 2
                        }}
                    >

                        <Text style={{
                            fontFamily: lato.bold.default,
                            fontSize: 13,

                        }}>{to?.place}</Text>

                    </View>


                </View>
            </View>

            

          </View>
        </View>

          <View style={{
            padding: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}>

            <View style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10
            }}>

              <MoneyIcon />

              <Text>{price?.symbol}{price?.amount}</Text>

            </View>

            <Text style={{
                fontFamily: lato.bold.default,
                color: statusColor,
                fontSize: 12
            }}>{status}</Text>

          </View>

      </View>
    </TouchableOpacity>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  lineStyle:{
    width: 2,
    height: "15%",
    backgroundColor: blackColor.opacity500

  }
});
