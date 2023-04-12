import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { lato } from '../../fonts'
import { whiteColor } from '../../assets/colors'
import { useNavigation } from '@react-navigation/native'
import { useActionContext } from '../../context'

const NavRoute = ({icon,label, name}) => {
    const {navigate} = useNavigation();
    const {closeMenu} = useActionContext();
  return (
    <TouchableOpacity onPress={()=>{

        closeMenu();
        setTimeout(()=>{
            navigate(name);

        })

    }} style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 20,

    }}>

    {icon}
      <Text style={{
        fontFamily: lato.regular.default,
        color: whiteColor.default,
        fontSize: 17
      }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default NavRoute

const styles = StyleSheet.create({})