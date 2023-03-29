import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screenNav } from '../../data/general'
import { useNavigation, useRoute } from '@react-navigation/native'
import { primaryColor } from '../../assets/colors'

const Nav = () => {
  const {name: screeName} = useRoute();
  const {navigate}= useNavigation();
  return (
    <View style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 20
    }}>

      {screenNav.map(({Icon, name}, index)=>(

        screeName === name? (

          <Pressable key={index}>

            <Icon size={23} color={primaryColor.default} />

          </Pressable>
        ) :(

          <TouchableOpacity onPress={()=>{
            navigate(name)
          }} key={index}>

            <Icon size={23} color={primaryColor.opacity500} />

          </TouchableOpacity>
        )


      ))}
     
    </View>
  )
}

export default Nav

const styles = StyleSheet.create({})