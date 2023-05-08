import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, FormInputField, LoggedInContainer, Logo, Nav } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { CalendarIcon, CreditCardIcon, InfoIcon } from "../assets/icons";

const AddCard = () => {
  const { navigate } = useNavigation();
  return (
    <LoggedInContainer containerStyle={{
        paddingVertical: 15
    }} showBackFunction headerText="Add Card" headerTextStyle={{
        marginLeft: 5
    }}>

        <View style={{
            flex: 1
        }}>

            <ScrollView contentContainerStyle={{
                gap: 20
            }}>

                <FormInputField floatLeftIcon={<CreditCardIcon color={primaryColor.default} />} placeholder="Card number" label="Card Number" labelStyle={{
                    ...styles.labelStyle
                }} inputStyle={{
                    ...styles.inputStyle
                }} />

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                    width: "100%",
                }}>

                    <FormInputField style={{
                        flex: 1/2

                    }} floatLeftIcon={<CalendarIcon color={primaryColor.default} />} placeholder="Expiry Date" label="MM/YY" labelStyle={{
                        ...styles.labelStyle
                    }} inputStyle={{
                        ...styles.inputStyle
                    }} />

                    <FormInputField style={{
                        flex: 1/2

                    }} floatLeftIcon={<InfoIcon color={primaryColor.default} />} placeholder="***" label="CVV" labelStyle={{
                        ...styles.labelStyle
                    }} inputStyle={{
                        ...styles.inputStyle
                    }} />

                </View>

            </ScrollView>

        </View>

        <TouchableOpacity style={{
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 20,
            backgroundColor: primaryColor.default,
            borderRadius: 10
        }}>
            <Text style={{
                fontFamily: lato.bold.default,
                color: whiteColor.default
            }}>Add Card</Text>
        </TouchableOpacity>

        

    </LoggedInContainer>
  );
};

export default AddCard;

const styles = StyleSheet.create({
    inputStyle:{
        backgroundColor: "rgba(0, 0, 0, .05)",
        borderWidth: 0,


    },
    labelStyle:{
        fontSize: 13,
        fontFamily: lato.bold.default,
    }
});
