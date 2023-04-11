import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screenNav } from '../../data/general'
import { useNavigation, useRoute } from '@react-navigation/native'
import { blackColor, primaryColor, whiteColor } from '../../assets/colors'

const Nav = () => {
  const {name: screeName} = useRoute();
  const {navigate}= useNavigation();
  return (
    <View style={{
        width: "100%",
        shadowColor: blackColor.default,
        borderTopColor: "rgba(0, 0, 0, .05)",
        borderTopWidth: 1,
        height: 60,
        shadowRadius: 10,
        shadowOffset: {
          height: 5,
          width: 5,
        },
        shadowOpacity: 1,
        elevation: 3,
        // paddingTop: 2,
    }}>

      <View style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        // paddingVertical: 20,
        height: "100%",
        backgroundColor: whiteColor.default
      }}>
        {screenNav.map(({Icon, name}, index)=>(

          screeName === name? (

            <Pressable key={index} style={{
              ...styles.buttonStyle
            }}>

              <Icon size={23} color={primaryColor.default} />

            </Pressable>
          ) :(

            <TouchableOpacity style={{
              ...styles.buttonStyle
            }} onPress={()=>{
              navigate(name)
            }} key={index}>

              <Icon size={23} color={primaryColor.opacity500} />

            </TouchableOpacity>
          )


        ))}

      </View>

     
    </View>
  )
}

export default Nav

const styles = StyleSheet.create({
  buttonStyle: {
    // marginTop: -3
  }
})