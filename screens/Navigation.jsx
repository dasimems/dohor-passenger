import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Map, Nav, RoundedImage } from "../components";
import { blackColor, dangerColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { NavNames, padding } from "../data/general";
import { TouchableOpacity } from "react-native";
import { MaleAvatarOne } from "../assets/images";
import { CarIcon, NotificationIcon, Search, SendIcon2, TargetIcon } from "../assets/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useActionContext } from "../context";

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

      <TouchableOpacity style={{
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

        <View style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: 15,
          paddingBottom: 25
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

          <Button style={{
            backgroundColor: primaryColor.default
          }}>
            <Text style={{
              fontFamily: lato.bold.default,
              color: whiteColor.default
            }}>Start</Text>
          </Button>
        

        </View>

      </View>
    </LoggedInContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
