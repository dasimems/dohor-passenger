import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AngleRight } from '../../assets/icons'
import { blackColor, primaryColor } from '../../assets/colors'
import { lato } from '../../fonts'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ProfileRoute = ({label, name, icon}) => {
    const {navigate} = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{

        navigate(name);

    }} style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        borderBottomWidth: 1,
        borderBottomColor: blackColor.opacity100,
        paddingVertical: 15
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        gap: 10
      }}>
        {icon}
       <Text style={{
        fontFamily: lato.bold.default,
        fontSize: 14,
        color: blackColor.opacity500
       }}>{label}</Text>
      </View>

      <AngleRight color={primaryColor.default} />
    </TouchableOpacity>
  )
}

export default ProfileRoute

const styles = StyleSheet.create({})