import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blackColor, whiteColor } from '../../assets/colors'

const RoundedImage = ({size, imagePadding, image, style, imageContainerBackground, imageParentBackground, ...props}) => {
  return (
    <View style={{
        width: size? size: 48,
        height: size? size: 48,
        backgroundColor: imageParentBackground? imageParentBackground : whiteColor.opacity900,
        padding: imagePadding? imagePadding : 3,
        ...style,
        borderRadius: 10000,
    }} {...props}>
      <View
        style={{
            backgroundColor: imageContainerBackground? imageContainerBackground : blackColor.opacity200,
            width: "100%",
            height: "100%",
            borderRadius: 10000
        }}
      >

        <Image
          source={image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10000
          }}
        />

      </View>
    </View>
  )
}

export default RoundedImage

const styles = StyleSheet.create({})