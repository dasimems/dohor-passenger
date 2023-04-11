import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { blackColor, dangerColor, pendingColor, successColor, whiteColor } from "../../assets/colors";
import { formatDate } from "../../functions";
import { lato } from "../../fonts";

const TripCard = ({ date, name, price, image, from, to, status }) => {
  const imageWidth = 50;
  const viewGap = 20;
  const [statusColor, setStatusColor] = useState(pendingColor.default)

  useEffect(()=>{

    if(status.toLowerCase() === "completed"){
      setStatusColor(successColor.default)
    }else if(status.toLowerCase() === "cancelled"){
      setStatusColor(dangerColor.default)
    }

  }, [status])

  return (
    <View
      style={{
        elevation: 2,
        shadowColor: blackColor.opacity300,
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
          padding: 20,
          borderRadius: 15
        }}
      >
        <Text
          style={{
            fontFamily: lato.regular.default,
            color: blackColor.opacity600
          }}
        >
          {formatDate({ dateFormat: ["DD", "D", "MM", "YY"] }).fullDate}
        </Text>

        <View
          style={{
            gap: 10,
            marginTop: 20
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: viewGap,
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: viewGap,
                alignItems: "center"
              }}
            >
              <Image
                source={image}
                style={{
                  backgroundColor: blackColor.opacity100,
                  width: imageWidth,
                  height: imageWidth,
                  borderRadius: 10,
                  resizeMode: "cover",
                  
                }}
              />

              <Text
                style={{
                  fontFamily: lato.black.default,
                  fontSize: 15
                }}
              >
                {name}
              </Text>
            </View>

            <Text
              style={{
                fontFamily: lato.bold.default,
                fontSize: 13
              }}
            >
              {price?.symbol}
              {price?.amount}
            </Text>
          </View>

          <View
            style={{
              height: 100,
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
                    width: imageWidth,
                    height: "100%",
                    alignItems: "center",
                    gap: 5,
                }}
                >
                <View
                    style={{
                    backgroundColor: successColor.default,
                    width: 14,
                    height: 14,
                    borderRadius: 9999
                    }}
                />

                <View style={{flex:1, gap: 5 }}>

                  <View style={{
                    width: 2,
                    height: 6,
                    backgroundColor: blackColor.default
                  }}></View>

                  <View style={{
                    width: 2,
                    height: 12,
                    backgroundColor: blackColor.default
                  }}></View>

                  <View style={{
                    width: 2,
                    height: 12,
                    backgroundColor: blackColor.default
                  }}></View>

                  <View style={{
                    width: 2,
                    height: 12,
                    backgroundColor: blackColor.default
                  }}></View>


                </View>

                <View
                    style={{
                    backgroundColor: dangerColor.default,
                    width: 18,
                    height: 18,
                    borderRadius: 9999
                    }}
                />
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
                        <Text style={{
                            fontFamily: lato.regular.default,
                            fontSize: 10,
                            color: blackColor.opacity500
                        }}>{formatDate({date: from?.time, timeFormat: ["H", "M",""], showTimeDifference: true}).fullTime}</Text>

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
                        {to && to.time && <Text style={{
                            fontFamily: lato.regular.default,
                            fontSize: 10,
                            color: blackColor.opacity500
                        }}>{formatDate({date: to?.time, timeFormat: ["H", "M",""], showTimeDifference: true}).fullTime}</Text>}

                    </View>


                </View>
            </View>

            <Text style={{
                fontFamily: lato.bold.default,
                color: statusColor,
                fontSize: 12
            }}>{status}</Text>

          </View>
        </View>
      </View>
    </View>
  );
};

export default TripCard;

const styles = StyleSheet.create({});
