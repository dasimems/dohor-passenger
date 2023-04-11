import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Nav, RoundedImage } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { AngleLeft, StarIcon } from "../assets/icons";
import { padding } from "../data/general";
import { MaleAvatarOne } from "../assets/images";

const Header = () => {
    
  const { goBack } = useNavigation();
    return(
        <View style={{
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

        </View>
    )
}

const Profile = () => {
  return (
    <LoggedInContainer
        header={<Header />}
        navHidden
    >

        <ScrollView contentContainerStyle={{
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
                gap: 30
            }}>
                <View style={{
                    ...styles.accountContentStyle
                }}>
                    <Text style={{
                        ...styles.contentTitleStyle
                    }}>Private Code</Text>
                    <Text style={{
                        ...styles.contentValueStyle
                    }}>Wrry#5fw</Text>
                </View>

                <View style={{
                    ...styles.accountContentStyle
                }}>
                    <Text style={{
                        ...styles.contentTitleStyle
                    }}>Email</Text>
                    <Text style={{
                        ...styles.contentValueStyle
                    }}>dasimems@gmail.com</Text>
                </View>

                 <View style={{
                    ...styles.accountContentStyle
                }}>
                    <Text style={{
                        ...styles.contentTitleStyle
                    }}>Phone number</Text>
                    <Text style={{
                        ...styles.contentValueStyle
                    }}>+(234) 903-3663-4645</Text>
                </View>
            </View>
        </ScrollView>
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
