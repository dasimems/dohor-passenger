import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RoundedImage from "../../../general/RoundedImage";
import { blackColor, whiteColor } from "../../../../assets/colors";
import { lato } from "../../../../fonts";
import { StarIcon } from "../../../../assets/icons";

const ReviewCard = ({ image, name, review, rate, style }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        ...style
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <RoundedImage
          image={image}
          imageContainerBackground={whiteColor.opacity700}
          imageParentBackground={blackColor.opacity200}
        />

        <View
          style={{
            gap: 6
          }}
        >
          <Text
            style={{
              fontFamily: lato.bold.default,
              color: blackColor.opacity700
            }}
          >
            {name}
          </Text>

          <Text
            style={{
              fontFamily: lato.regular.default,
              color: blackColor.opacity500
            }}
          >
            {review}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 3
        }}
      >
        <StarIcon color="#FFBA40" set="bold" size={18} />

        <Text
          style={{
            color: blackColor.opacity500,
            fontFamily: lato.regular.default
          }}
        >
          {rate}
        </Text>
      </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({});
