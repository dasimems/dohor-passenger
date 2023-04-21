import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Nav, RatingBar } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { StarIcon } from "../assets/icons";

const RatingDetails = () => {
  const { navigate } = useNavigation();
  return <LoggedInContainer headerText="Rate" showBackFunction headerTextStyle={{ fontSize: 17 }}>
      <ScrollView>
        <View style={{ paddingVertical: 60, alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Text style={{ fontFamily: lato.bold.default, fontSize: 40 }}>
              4.90
            </Text>

            <StarIcon size={15} color={"#FFBA40"} set="bold" />
          </View>

          <Text style={{ textAlign: "center", marginLeft: -15, fontFamily: lato.regular.default, color: blackColor.opacity600 }}>
            Ratings
          </Text>
        </View>

        <View style={{
            gap: 30
        }}>
            <RatingBar rate={5} percent={88} />
            <RatingBar rate={4} percent={6} />
            <RatingBar rate={3} percent={3} />
            <RatingBar rate={2} percent={1} />
            <RatingBar rate={1} percent={2} />
        </View>

        <Text style={{
            textAlign: "center",
            fontFamily: lato.regular.default,
            color: blackColor.opacity400,
            marginTop: 40
        }}>
          Your rider rate trip is based on the scale of 1-5 stars. Your ratings is the average of rider's ratings from your last 3,251 Trips
        </Text>
      </ScrollView>
    </LoggedInContainer>;
};

export default RatingDetails;

const styles = StyleSheet.create({});
