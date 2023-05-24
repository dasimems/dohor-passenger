import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { blackColor, dangerColor, primaryColor, successColor, whiteColor } from '../../assets/colors'
import { padding } from '../../data/general'
import { DotIcon, LocationIcon } from '../../assets/icons'
import { lato } from '../../fonts'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_API_KEY} from "@env"
import { useNavigationContext } from '../../context'
import PlacesInput from "react-native-places-input";

const windowWidth = Dimensions.get("screen").width;

const LocationSearch = memo(() => {
    const {to, setTo} = useNavigationContext();
  return (
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


                      {/* <GooglePlacesAutocomplete
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
                        //   console.log(data, details);
                          
                          if(details && details.geometry && details.geometry.location && details.geometry.location.lat && details.geometry.location.lng){
                            
                              const locationData = {
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng,
                              }

                              console.log(locationData)
                          }

                        //   setTo(locationData)
                        }}
                        
                        query={{
                          key: GOOGLE_API_KEY,
                          language: 'en',
                        }}
                      /> */}

                      <PlacesInput
                            googleApiKey={GOOGLE_API_KEY}
                            placeHolder={"Enter your destination"}
                            language={"en-US"}
                            onSelect={place => {
                                const locationData = {
                                    description: place?.result?.formatted_address,
                                    latitude: place?.result?.geometry?.location?.lat,
                                    longitude: place?.result?.geometry?.location?.lng,
                                }

                                setTo(locationData)

                            }}
                            stylesInput={{
                                fontFamily: lato.bold.default,
                                paddingLeft: 0,
                                width: "100%",
                            }}

                            stylesItemText={{
                                fontFamily: lato.regular.default
                            }}

                            stylesList={{
                                bottom: "103%",
                                left: -65,
                                width: windowWidth - (padding * 2),
                                borderRadius: 10,
                                // backgroundColor: "red"
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
  )
})

export default LocationSearch

const styles = StyleSheet.create({})