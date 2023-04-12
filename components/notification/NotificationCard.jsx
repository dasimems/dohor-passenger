import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blackColor } from '../../assets/colors'
import { Image } from 'react-native'
import { lato } from '../../fonts'

const NotificationCard = ({image, title, description}) => {
  return (
    <View style={{
        flexDirection: "row",
        borderBottomColor: blackColor.opacity100,
        borderBottomWidth: 1,
        padding: 15,
        paddingVertical: 20,
        alignItems: "flex-start",
        gap: 15
    }}>

        <View style={{
            width: 40,
            height: 40,
            backgroundColor: blackColor.opacity100,
            borderRadius: 100,
            padding: 10
        }}>
          <Image source={image} style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain"
          }} />  
        </View>

        <View style={{
            gap: 6,
            alignItems: "flex-start",
            flex:1
        }}>

            <Text style={{
                fontFamily: lato.bold.default,
                fontSize: 15
            }}>{title}</Text>

            <Text style={{
                fontFamily: lato.regular.default,
                color: blackColor.opacity600,
                fontSize: 12,
            }}>{description}</Text>
        </View>
    </View>
  )
}

export default NotificationCard

const styles = StyleSheet.create({})