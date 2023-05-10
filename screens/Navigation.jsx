import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Button, LoggedInContainer, Map, OnlineRequest, Passengers, SearchingPassenger } from "../components";
import { blackColor, dangerColor, primaryColor, successColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { NavNames, padding } from "../data/general";
import { TouchableOpacity } from "react-native";
import { DotIcon, LocationIcon, NotificationIcon, TargetIcon } from "../assets/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useActionContext, useNavigationContext, useUserContext } from "../context";
import { passengerList } from "../data/navigationData";
import {GOOGLE_API_KEY} from "@env";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Header = ()=> {
  const {navigate} = useNavigation();
  const {openMenu, menuOpened, closeMenu} = useActionContext();
  return(
    <SafeAreaView style={{
      flexDirection: "row",
      gap: 10,
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: padding,
      position: "absolute",
      zIndex: 999,
      elevation: 999,
      width: "100%",
      paddingVertical: 15
    }}>


      <TouchableOpacity onPressIn={()=>{
        if(menuOpened){
          closeMenu();
        }else{
          openMenu();
        }
      }} style={{
        backgroundColor: whiteColor.default,
        width: 35,
        height: 35,
        borderRadius: 200,
        alignItems: "center",
        justifyContent: "center"
      }} onPress={()=>{

      }}>

        <View style={{
          width: 15,
          gap: 3
        }}>

          <View style={{
            width: "100%",
            height: 3,
            backgroundColor: blackColor.default,
            borderRadius: 10
          }} />
          <View style={{
            width: "60%",
            height: 3,
            backgroundColor: blackColor.default,
            borderRadius: 10
          }} />
          <View style={{
            width: "100%",
            height: 3,
            backgroundColor: blackColor.default,
            borderRadius: 10
          }} />
        </View>


      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        navigate(NavNames.Notification.name)
      }} style={{
        backgroundColor: whiteColor.default,
        width: 35,
        height: 35,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}>

        <View style={{
          position: "relative"
        }}>

          <NotificationIcon  />

          <View style={{
            width: 6,
            height: 6,
            backgroundColor: dangerColor.default,
            position: "absolute",
            top: 1,
            right: 2,
            borderRadius: 90
          }}></View>
        </View>
      </TouchableOpacity>




    </SafeAreaView>
  )
}

const Navigation = () => {
  const { navigate } = useNavigation(); 
  const {online} = useUserContext();
  const {passengers, setUserList, from} = useNavigationContext();
  const { openModal } = useActionContext();
  const [timing,setTiming] =useState(3000)
  const {setTo, to} = useNavigationContext();

  const changeOnlineVisibility = useCallback((type) => {

    if(type){

      openModal({
        content: <OnlineRequest type={type} />,
        height: "100%",
        styles: {
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center"

        }
      });

    }

  }, [])

  useEffect(()=>{

    if(online){

      setTimeout(()=>{

        if(timing <= 0){

          setUserList(passengerList)

        }else{
          
          setTiming(timing - 1000)

        }


      }, 1000)

    }else{

      setUserList([])

    }

  }, [online, timing])

  return (
    <LoggedInContainer
      header={<Header />}
      containerStyle={{
        paddingHorizontal: 0
      }}
    >
      <View style={{
        flex: 1,
        position: "relative",
        backgroundColor: blackColor.opacity100
      }}>

        <Map />

        {from && <View style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: 0,
        }}>

          <View style={{
            alignItems: "flex-end",
            paddingHorizontal: padding,
            paddingVertical: 15
          }}>

            <TouchableOpacity style={{
              width: 40,
              height: 40,
              backgroundColor: primaryColor.default,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 900
            }}>
              <TargetIcon color={whiteColor.default} />
            </TouchableOpacity>

          </View>
          

          {online?
          
            <View>

              {passengers.length < 1? (
                <>

                <SearchingPassenger />
                  
                </>
              ) : (

                <Passengers />

              )}


            </View>

          : <View style={{
              padding,
              paddingBottom: 25


            }}>
            
              <View style={{
                padding,
                backgroundColor: whiteColor.default,
                borderRadius: 20,

              }}>

                <View style={{
                  flexDirection: "row",
                  flex: 1,
                  gap: 20
                }}>

                  <View style={{
                    height: 100,
                    gap: 5,
                    justifyContent: "space-between",
                    alignItems: "center"

                  }}>

                    <DotIcon color={successColor.default} />

                      <View style={{
                        flex: 1,
                        alignItems: "center",
                        gap: 3
                      }}>

                        <View style={{
                          width: 3,
                          height: "20%",
                          borderRadius: 10,
                          backgroundColor: blackColor.opacity100
                        }} />
                        <View style={{
                          width: 3,
                          height: "20%",
                          borderRadius: 10,
                          backgroundColor: blackColor.opacity100
                        }} />
                        <View style={{
                          width: 3,
                          height: "20%",
                          borderRadius: 10,
                          backgroundColor: blackColor.opacity100
                        }} />
                        <View style={{
                          width: 3,
                          height: "20%",
                          borderRadius: 10,
                          backgroundColor: blackColor.opacity100
                        }} />
                        <View style={{
                          width: 3,
                          height: "20%",
                          borderRadius: 10,
                          backgroundColor: blackColor.opacity100
                        }} />

                      </View>

                    <LocationIcon color={dangerColor.default} set="bold" />

                  </View>

                  <View style={{
                    flex: 1,

                  }}>
                    
                    <View style={{
                      height: 49,
                      width: "100%"
                    }}>

                      <Text style={{
                        fontFamily: lato.bold.default,
                        fontSize: 15,
                        marginTop: 1.5
                      }}>Current Location</Text>

                    </View>

                    <View style={{
                      width: "100%",  
                      height: 2,
                      backgroundColor: blackColor.opacity100
                    }} />

                    <View style={{
                      // height: 49,
                      width: "100%"
                    }}>


                      <GooglePlacesAutocomplete
                        styles={{
                          container: {
                            paddingTop: 13,
                            // backgroundColor: "red"
                          },
                          textInput:{
                            fontFamily: lato.bold.default,
                            paddingLeft: 0,
                            alignItems: "flex-end"
                          },
                          row:{
                            marginLeft: 0,
                            width: "100%",
                            
                          },
                          description: {
                            fontFamily: lato.regular.default,
                            color: blackColor.opacity700
                          }
                        }}
                        placeholder='Enter your destination'
                        enablePoweredByContainer={false}
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                          // 'details' is provided when fetchDetails = true
                          // console.log(data, details);

                          const locationData = {
                            latitude: details?.geometry?.location?.lat,
                            longitude: details?.geometry?.location?.lng,
                          }
                          setTo(locationData)
                        }}
                        
                        query={{
                          key: GOOGLE_API_KEY,
                          language: 'en',
                        }}
                      />

                    </View>

                  </View>
                </View>

                {to && <TouchableOpacity style={{
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                  alignItems: "center",
                  backgroundColor: primaryColor.default,
                  borderRadius: 10,
                  marginTop: 15

                }}>
                        <Text style={{
                          textAlign: "center",
                          fontFamily: lato.bold.default,
                          color: whiteColor.default,
                        }}>Search</Text>
                </TouchableOpacity>}

              </View>
            </View>
          }
        

        </View>}

      </View>
    </LoggedInContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
