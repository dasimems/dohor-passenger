import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { padding } from '../../../data/general'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AngleLeft } from '../../../assets/icons'
import { lato } from '../../../fonts'
import Button from '../../general/Button'
import { blackColor, primaryColor } from '../../../assets/colors'
import { useNavigation } from '@react-navigation/native'

const ProfileHeader = ({text, processing, action,}) => {
    const {goBack} = useNavigation()
  return (
    <SafeAreaView style={{
        paddingVertical: 15,
        paddingHorizontal: padding,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: "center",
        gap: 10
      }}>

        <TouchableOpacity onPress={goBack}>

            <AngleLeft />

        </TouchableOpacity>

        <Text style={{
            fontFamily: lato.bold.default,
            fontSize: 18
        }}>{text? text : "Profile"}</Text>

      </View>

      <Button loading={processing} loaderSize={20} loadingStyle={{
        backgroundColor: primaryColor.opacity400,
        width: "auto",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
      }} style={{
        backgroundColor: primaryColor.default,
        width: "auto",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
      }}>
        <Text style={{
            fontFamily: lato.regular.default,
            color: processing? blackColor.opacity400 : blackColor.default,

        }}>{processing? "Saving" : "Save"}</Text>

      </Button>
    </SafeAreaView>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({})