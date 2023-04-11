import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RoundedImage from './RoundedImage'
import { useActionContext, useFormContext } from '../../context'

const CountryCard = ({name, image, mobileCode, countryCode}) => {
    const { setCountry } = useFormContext();
    const {closeModal} = useActionContext()
  return (
    <TouchableOpacity style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }} onPress={()=>{

        setCountry({
          flag: image,
          mobileCode: mobileCode.slice(1,),
          name,
          countryCode
        });

        closeModal();

    }}>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 20
      }}>

        <RoundedImage url image={image} />
        <Text>{name}</Text>
      </View>

      <Text>{mobileCode}</Text>
    </TouchableOpacity>
  )
}

export default CountryCard

const styles = StyleSheet.create({})