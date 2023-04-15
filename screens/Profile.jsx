import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Nav, ProfileRoute, RoundedImage } from "../components";
import { blackColor, dangerColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { AngleLeft, LogOutIcon, StarIcon } from "../assets/icons";
import { NavNames, padding, profileLinks } from "../data/general";
import { MaleAvatarOne } from "../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";

const Header = () => {
    
  const { goBack } = useNavigation();
    return(
        <SafeAreaView style={{
            flexDirection: "row",
            gap: 10,
            paddingHorizontal: padding,
            paddingVertical: 15,
            alignItems: "center"

        }}>


            <TouchableOpacity onPress={()=>{
                goBack();

            }}>

                 <AngleLeft />
            </TouchableOpacity>

            <Text
                style={{
                    fontSize: 18,
                    fontFamily: lato.bold.default
                }}
            >My Account</Text>

        </SafeAreaView>
    )
}

const Profile = () => {
    
  const {  navigate } = useNavigation();

  return (
    <LoggedInContainer
        header={<Header />}
        navHidden
    >

        <View style={{
            flex: 1
        }}>

            <View style={{
                alignItems: "center",
                marginTop: 20,
                gap: 10

            }}>

                <RoundedImage 
                    imagePadding={3}
                    size={70}
                    imageParentBackground={blackColor.opacity100}
                    image={MaleAvatarOne}
                />

                <Text style={{
                    fontFamily: lato.bold.default,
                    color: blackColor.opacity600,
                    fontSize: 18,
                    textAlign: "center"
                }}>John Doe</Text>

                <Text style={{
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity500,
                    fontSize: 13,
                    textAlign: "center"
                }}>+(234) 903-366-4645</Text>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 3
                }}>

                    <StarIcon set="bold" color={"#FFCC00"} /> 

                    <Text style={{
                        fontFamily: lato.regular.default,
                        color: blackColor.opacity500,
                        fontSize: 13,
                        textAlign: "center"
                    }}>4.9</Text>

                </View>

            </View>

            <View style={{
                marginTop: 20,
                flex: 1
            }}>

                <FlatList 
                    data={profileLinks}
                    extraData={profileLinks}
                    keyExtractor={((_, index)=>index)}
                    renderItem={({item: {Icon, label, name}})=>(

                        <ProfileRoute label={label} name={name} icon={<Icon color={primaryColor.default} set="bold" size={25} />} />

                    )}
                />
                
            </View>

        </View>
        <View style={{
            alignItems: "center",
            paddingVertical: 20
        }}>
            <TouchableOpacity style={{
                paddingVertical: 15,
                paddingHorizontal: 20,
                backgroundColor: dangerColor.opacity600,
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                gap: 10
            }} onPress={()=>{
                navigate(NavNames.Login.name)
            }}>

                <Text style={{
                    fontFamily: lato.bold.default,
                }}>Log out</Text>

                <LogOutIcon />

            </TouchableOpacity>
        </View>
    </LoggedInContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  contentTitleStyle: {
    fontFamily: lato.bold.default
  },
  contentValueStyle: {
    fontFamily: lato.regular.default,
    color: blackColor.opacity500
  },
  accountContentStyle: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between"
  }
});
