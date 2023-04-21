import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StarIcon } from '../../../../assets/icons'
import { lato } from '../../../../fonts'
import { blackColor, primaryColor } from '../../../../assets/colors'

const RatingBar = ({rate, percent}) => {
  return (
    <View style={{
        flexDirection: "row",
        gap: 20,
        justifyContent: 'space-between'
    }}>
      <View style={{
        flexDirection:"row",
        width: 28,
        justifyContent: "space-between",
        alignItems: 'center'
      }}>
        <StarIcon color="#FFBA40" size={15} set="bold" />

        <Text style={{
            fontFamily: lato.regular.default,
            color: blackColor.opacity500
        }}>{rate}</Text>
      </View>

      <View style={{
        flex: 1,
        height: 15,
        backgroundColor: primaryColor.opacity200,
      }}>

        <View style={{
            width: `${percent}%`,
            height: "100%",
            backgroundColor: primaryColor.default
        }}></View>

      </View>

      <View style={{
        width: 40,

      }}>

        <Text style={{
            fontFamily: lato.bold.default
        }}>{percent}%</Text>
      </View>

    </View>
  )
}

export default RatingBar

const styles = StyleSheet.create({})