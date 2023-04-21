import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { lato } from '../../fonts';
import { blackColor } from '../../assets/colors';

const ProfileDetailsCard = ({title, value}) => {
  return (
    <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }}>
      <Text style={{
        fontFamily: lato.regular.default,
        color: blackColor.default,
        fontSize: 15,
      }}>{title}</Text>
      <Text style={{
        fontFamily: lato.regular.default,
        color: blackColor.opacity500,
        fontSize: 15,
      }}>{value}</Text>
    </View>
  )
}

export default ProfileDetailsCard;

const styles = StyleSheet.create({})