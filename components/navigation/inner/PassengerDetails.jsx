import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigationContext } from '../../../context'
import { TouchableOpacity } from 'react-native';
import { AngleLeft, ChatIcon, DotIcon, LocationIcon, SuvIcon } from '../../../assets/icons';
import RoundedImage from '../../general/RoundedImage';
import { blackColor, dangerColor, primaryColor, whiteColor } from '../../../assets/colors';
import Stars from '../../general/Stars';
import { padding } from '../../../data/general';
import { lato } from '../../../fonts';
import Button from '../../general/Button';

const PassengerDetails = () => {
  const {activePassenger, passengers, setPassengerSelected} = useNavigationContext();
  const [passengerDetails, setPassengerDetails] = useState(null)
  const [rejectLoading, setRejectLoading] = useState(false)
  const [acceptLoading, setAcceptLoading] = useState(false)

  useEffect(()=>{

    var passengerInfo = passengers.find(passenger => passenger.id === activePassenger.id);

    if(passengerInfo){

      setPassengerDetails(passengerInfo)

    }else{
      setPassengerSelected();
    }

  },[activePassenger])

  return (
    <View style={{
      backgroundColor: whiteColor.default,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      overflow: "hidden"
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, .05)",
        justifyContent: "space-between",
        padding: 15,
        paddingHorizontal: padding,
      }}>

        <View style={{
          flexDirection: "row",
          alignItems: 'center',
        }}>
          <TouchableOpacity onPress={()=>{
            setPassengerSelected()
          }}>
            <AngleLeft size={30} />
          </TouchableOpacity>

            <View style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10
            }}>

              <RoundedImage image={passengerDetails?.image} />

              <View>
                <Text>{passengerDetails?.name}</Text>

                <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5
                }}>

                  <Stars active={1} total={1} />
                  <Text>{passengerDetails?.rating}</Text>

                </View>
              </View>

            </View>
        </View>

        <TouchableOpacity>
          <ChatIcon set="bold" color={"#4252FF"} size={30} />
        </TouchableOpacity>

      </View>
      <View style={{
        display: "flex",
        paddingVertical:  15,
        paddingHorizontal: padding,
        height: 100,
        flexDirection: "row",
        gap: 15,
        borderBottomColor: "rgba(0, 0, 0, .05)",
        borderBottomWidth: 1
      }}>

        <View style={{
          justifyContent: "space-between",
          height: "100%",
          gap: 3,
          alignItems: "center"

        }}>

          <DotIcon color="#4CE5B1" />

          <View style={{
            flex: 1,
            alignItems: "center",
            gap: 4
          }}>

            <View style={{
              width: 2,
              height: 5,
              backgroundColor: blackColor.opacity200,
              borderRadius: 20
            }} />

            <View style={{
              width: 2,
              height: 5,
              backgroundColor: blackColor.opacity200,
              borderRadius: 20
            }} />

            <View style={{
              width: 2,
              height: 5,
              backgroundColor: blackColor.opacity200,
              borderRadius: 20
            }} />

            

          </View>
          <LocationIcon color={dangerColor.default} />

        </View>

        <View style={{
          justifyContent: "space-between",
          height: "100%",
          flex: 1,
          paddingTop: 5
        }}>

          <Text style={{
            ...styles.destinationTextStyle
          }} >{passengerDetails?.from?.destination}</Text>
          <View style={{
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, .05)",
            height: 1
          }}></View>
          <Text style={{
            ...styles.destinationTextStyle
          }} >{passengerDetails?.to?.destination}</Text>

        </View>

      </View>

      <View style={{
        padding: 30,
        paddingHorizontal: padding,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 30
      }}>

        <SuvIcon size={40} />

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          justifyContent: "space-between",
          flex: 1
        }}>

          <View style={{
            ...styles.extraDetailsStyle
          }}>

            <Text style={{
              ...styles.extraDetailsTitleStyle
            }}>DISTANCE</Text>

            <Text style={{
              ...styles.extraDetailsValueStyle
            }}>{passengerDetails?.distance/1000}km</Text>

          </View>

          <View style={{
            ...styles.extraDetailsStyle
          }}>

            <Text style={{
              ...styles.extraDetailsTitleStyle
            }}>TIME</Text>

            <Text style={{
              ...styles.extraDetailsValueStyle
            }}>{passengerDetails?.time/2}m</Text>

          </View>

          <View style={{
            ...styles.extraDetailsStyle
          }}>

            <Text style={{
              ...styles.extraDetailsTitleStyle
            }}>PRICE</Text>

            <Text style={{
              ...styles.extraDetailsValueStyle
            }}>{passengerDetails?.price?.amount}</Text>

          </View>



        </View>

      </View>

      <View style={{ flexDirection: "row", paddingBottom: 20, paddingHorizontal: padding, alignItems: "center", gap: 6 }}>
        <Button loaderSize={19} loading={rejectLoading} loadingStyle={{ ...styles.buttonStyle, ...styles.loadingStyle }} style={{ ...styles.buttonStyle }}>
          <Text style={{ fontFamily: lato.bold.default, color: rejectLoading ? whiteColor.opacity700 : whiteColor.default }}>
            Reject
          </Text>
        </Button>

        <Button loaderSize={19} loading={acceptLoading} loadingStyle={{ ...styles.buttonStyle2, ...styles.loadingStyle2 }} style={{ ...styles.buttonStyle2 }}>
          <Text style={{ fontFamily: lato.bold.default, color: acceptLoading ? whiteColor.opacity700 : whiteColor.default }}>
            Accept
          </Text>
        </Button>

      </View>
    </View>
  )
}

export default PassengerDetails

const styles = StyleSheet.create({
  destinationTextStyle:{
    fontFamily: lato.bold.default,
    
  },
  extraDetailsStyle:{
    alignItems: "center",
    gap: 15
  },
  extraDetailsTitleStyle: {
    color: blackColor.opacity300,
    fontFamily: lato.bold.default,

  },
  extraDetailsValueStyle: {
    color: blackColor.default,
    fontFamily: lato.bold.default,
    
  },
  locationStyle: {
    fontFamily: lato.regular.default
  },
  buttonStyle: {
    flex: 1 / 2,
    width: "auto",
    backgroundColor: dangerColor.opacity800,
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonStyle2: {
      flex: 1 / 2,
      width: "auto",
      backgroundColor: primaryColor.opacity800,
      paddingVertical: 13,
      paddingHorizontal: 15,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center"
    },

  loadingStyle: {
    backgroundColor: dangerColor.opacity500
  },

  loadingStyle2: {
    backgroundColor: primaryColor.opacity500
  }
})