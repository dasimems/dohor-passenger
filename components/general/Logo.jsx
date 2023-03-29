import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { bauhs93, lato } from '../../fonts'
import { logoImage } from '../../assets/images'

const Logo = ({image, imageSize}) => {
  return (
    <View style={{
        alignItems: "center",

    }}>

      {image? <>
        
        <Image source={logoImage} style={{
          width: imageSize? imageSize : 180,
          height: imageSize? imageSize: 180,
          resizeMode: "contain"
        }} />

      </> : 
      
        <>
          <Text style={{
            textAlign: "center",
            fontFamily: bauhs93,
            fontSize: 33
          }}>PAXI</Text>
          <Text style={{
            fontSize: 16,
            textAlign: "center",
            fontFamily: lato.regular.italic
          }}>Driver</Text>
        
        </>
      
      }
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({})