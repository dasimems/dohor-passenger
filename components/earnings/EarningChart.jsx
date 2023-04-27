import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { dangerColor, primaryColor } from '../../assets/colors'
import { lato } from '../../fonts'

const EarningChart = () => {

    const [chartWidth, setChartWidth] = useState(0)
    const [gapSize, setGapSize] = useState(6)
    const data = [
      {
        label: "Mon",
        value: "80%"
      },

      {
        label: "Tues",
        value: "50%"
      },

      {
        label: "Wed",
        value: "60%"
      },

      {
        label: "Thurs",
        value: "100%"
      },

      {
        label: "Fri",
        value: "20%"
      },

      {
        label: "Sat",
        value: "10%"
      },
      
      {
        label: "Sun",
        value: "50%"
      }

    ]

    const calculableWidth = (chartWidth - (6 * (data.length)))

    

  return (
    <View onLayout={({nativeEvent})=>{
        var { x, y, width, height } = nativeEvent.layout;

        setChartWidth(width);

    }} style={{
        width: "100%",
        height: 300,
        flexDirection: "row",
        gap: gapSize

    }}>

      {data.map(({label, value}, index)=>(
        <View key={index} style={{
          width: (calculableWidth/7),
          ...styles.barStyle
        }}>


          <View style={{
            ...styles.barInnerStyle
          }}>

            <View style={{

              ...styles.barStatStyle,
              height: value

            }}></View>

          </View>
          <Text style={{
            ...styles.labelStyle
          }}>{label}</Text>

        </View>

      ))}

      
    </View>
  )
}

export default EarningChart

const styles = StyleSheet.create({
  barStyle: {
    height: "100%",
    alignItems: "center",
    gap: 10
  },

  barInnerStyle: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end"
  },

  barStatStyle: {
    backgroundColor: primaryColor.opacity300
  },
  labelStyle:{
    color: dangerColor.opacity700,
    fontFamily: lato.regular.default

  }
});