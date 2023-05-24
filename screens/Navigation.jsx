import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Button, LocationSearch, LoggedInContainer, Map, OnlineRequest, Passengers, SearchingPassenger } from "../components";
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

              <LocationSearch />
            
              
            </View>
          }
        

        </View>}

      </View>
    </LoggedInContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
