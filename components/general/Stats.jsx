import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StatCard from './inner/StatCard';
import { primaryColor, whiteColor } from '../../assets/colors';

const Stats = ({style, stats, statCardStyle}) => {
    if(!stats || !Array.isArray(stats)){
        stats = [];
    }
  return (
    <View style={{
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        shadowColor: primaryColor.default,
        backgroundColor: whiteColor.default,
        borderWidth: 1,
        borderColor: primaryColor.opacity100,
        elevation: 5,
        zIndex: 5,
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: -10
        },
        borderRadius: 10,
        ...style
    }}>

        {stats.map((statOption, index)=>(
            <StatCard style={{
                ...statCardStyle,
            }} {...statOption} key={index} />
        ))}

    </View>
  )
}

export default Stats

const styles = StyleSheet.create({})