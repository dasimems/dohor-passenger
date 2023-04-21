import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blackColor, dangerColor, successColor } from '../../assets/colors'
import { formatDate } from '../../functions'
import { lato } from '../../fonts'

const TransactionCard = ({title, time, price, type, style, ...props}) => {
  return (
    <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: blackColor.opacity100,
        ...style


    }} {...props}>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15
      }}>

        <View style={{
            backgroundColor: dangerColor.opacity100,
            width: 40,
            height: 40,
            borderRadius: 1000,

        }} />

        <View style={{
            gap: 4
        }}>
            <Text style={{
                fontFamily: lato.bold.default,
                color: blackColor.opacity700
            }}>{title}</Text>
            <Text style={{
                fontFamily: lato.regular.default,
                fontSize: 12,
                color: blackColor.opacity600,

            }}>{formatDate({date: time, timeFormat: ["H","M"], showTimeDifference: true}).fullTime}</Text>
        </View>

      </View>
      <View>
        <Text style={{
            fontFamily: lato.bold.default,
            color: type && type.toLowerCase() === "credit"? successColor.default : dangerColor.opacity600
        }}>{type && type.toLowerCase() !== "credit" && "-"}${price}</Text>
      </View>
    </View>
  )
}

export default TransactionCard

const styles = StyleSheet.create({})