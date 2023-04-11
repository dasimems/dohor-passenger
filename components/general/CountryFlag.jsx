import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RoundedImage from './RoundedImage'
import { whiteColor } from '../../assets/colors'

const CountryFlag = ({size, image}) => {
  return (
    <View style={{
        width: size? size: 35,
        height: size? size: 35,
    }}>
      <RoundedImage url image={image} imagePadding={0.1} imageContainerBackground={whiteColor.default} size="100%" />
    </View>
  )
}

export default CountryFlag

const styles = StyleSheet.create({})