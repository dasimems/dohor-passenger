import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AngleRight } from '../../../assets/icons'
import { lato } from '../../../fonts'
import { blackColor, primaryColor } from '../../../assets/colors'

const StatCard = ({action, stat, label, style, statColor, ...props}) => {
  return (

    action? <TouchableOpacity onPress={action} style={{
        ...styles.statCardStyle,
        ...style
    }} {...props}>


        <View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4

        }}>
            <Text style={{
                ...styles.statTitleStyle,
                color: statColor? statColor : primaryColor.opacity800
            }}>{stat}</Text>

            <AngleRight color={statColor? statColor :primaryColor.opacity800} />

        </View>
            <Text style={{
                ...styles.statsLabelStyle,
                marginLeft: -10
            }}>{label}</Text>
        
    </TouchableOpacity>: 

    <View style={{
        ...styles.statCardStyle,
        ...style
    }} {...props}>
        <Text style={{
            ...styles.statTitleStyle,
            color: statColor? statColor : primaryColor.opacity800
        }}>{stat}</Text>
        <Text style={{
            ...styles.statsLabelStyle
        }}>{label}</Text>
    </View>


  )
}

export default StatCard

const styles = StyleSheet.create({
    statCardStyle:{
        gap: 8,
        alignItems: "center",

    },
    statTitleStyle:{
        fontFamily: lato.black.default,
        fontSize: 25,
        color: primaryColor.default

    },
    statsLabelStyle: {
        fontFamily: lato.regular.default,
        fontSize: 13,
        color: blackColor.opacity600
    }
})