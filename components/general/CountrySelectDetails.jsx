import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CountryFlag from './CountryFlag'
import { useFormContext } from '../../context'
import { blackColor } from '../../assets/colors'
import { lato } from '../../fonts'
import { AngleDown } from '../../assets/icons'

const CountrySelectDetails = ({image}) => {
    const { country } = useFormContext();
  return (
    <View style={{
        flexDirection: "row",
        alignItems:"center",
        gap: 7
    }}>
      <CountryFlag />
      <Text style={{
        color: blackColor.opacity800,
        fontFamily: lato.bold.default
      }}>+{country.mobileCode}</Text>

      <AngleDown size={11} />
    </View>
  )
}

export default CountrySelectDetails

const styles = StyleSheet.create({})