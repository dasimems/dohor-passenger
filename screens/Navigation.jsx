import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Map, Nav, RoundedImage } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { NavNames, padding } from "../data/general";
import { TouchableOpacity } from "react-native";
import { MaleAvatarOne } from "../assets/images";
import { CarIcon, Search, SendIcon2 } from "../assets/icons";

const Header = ()=> {
  const {navigate} = useNavigation();
  return(
    <View style={{
      flexDirection: "row",
      gap: 10,
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: padding,
      paddingVertical: 15
    }}>


      <TouchableOpacity onPress={()=>{
        navigate(NavNames.Profile.name)

      }}>

         <RoundedImage image={MaleAvatarOne} size={45} />

      </TouchableOpacity>

      <View style={{
        padding: 5,
        backgroundColor: primaryColor.default,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 10

      }}>

        <Text style={{
          fontFamily: lato.regular.default,
          color: whiteColor.default,
          marginLeft: 10
        }}>Online</Text>

        <View style={{
          width: 25,
          height: 25,
          borderRadius: 25,
          backgroundColor: whiteColor.default,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <CarIcon size={17} color={primaryColor.default} />
        </View>

      </View>

      <TouchableOpacity>
        <Search  color={blackColor.opacity500} />
      </TouchableOpacity>




    </View>
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
        position: "relative"
      }}>

        <Map />

        <View style={{
          position: "absolute",
          bottom: 0,
          width: "100%"
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
              <SendIcon2 set={"bold"} color={whiteColor.default} />
            </TouchableOpacity>

          </View>
        

        </View>

      </View>
    </LoggedInContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
