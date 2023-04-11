import { FlatList, StyleSheet, Text, TouchableOpacity, View, Dimensions, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { countryData } from '../../data/general'
import CountryCard from './CountryCard'
import FormInputField from './FormInputField'
import { blackColor } from '../../assets/colors'
import { CancelIcon2 } from '../../assets/icons'
import { useActionContext } from '../../context'

const windowHeight = Dimensions.get("window").height;


const CountryList = () => {

    const [countries, setCountries] = useState([])
    const { closeModal, setModalHeight } = useActionContext();
    const [searchInput, setSearchInput] = useState("")

    useEffect(()=>{

        Keyboard.addListener("keyboardDidShow", (e)=>{

            var keyboardHeight = e.endCoordinates.height;
            var modalHeight = windowHeight - keyboardHeight;

            setModalHeight(modalHeight)


        });

        Keyboard.addListener("keyboardDidHide", ()=>{

            setModalHeight("80%")

        });

    }, [])

    useEffect(()=>{

        if(searchInput.length > 0){
            setCountries(countryData.filter(country => new RegExp(searchInput.toLowerCase()).test(country.name.toLowerCase())))
        }else{
            setCountries(countryData)
        }

    }, [searchInput])

  return (
    <View
        style={{
            flex: 1
        }}
    >

        <View style={{
            alignItems: "flex-end",
            paddingBottom: 10
        }}>

            <TouchableOpacity onPress={()=>{
                closeModal();
            }}>
                <CancelIcon2 />
            </TouchableOpacity>

        </View>

        <FormInputField onChangeText={(text)=>{
            setSearchInput(text);
        }} placeholder="Search" inputStyle={{
            backgroundColor: blackColor.opacity100,
            borderWidth: 0,

        }} />

        <View
            style={{
                flex: 1,
                paddingVertical: 15
            }}
        >
        <FlatList 
            contentContainerStyle={{
                gap: 10
            }}
            data={countries}
            extraData={countries}
            keyExtractor={(_, index)=>index}
            renderItem={({item: {name, mobileCode, countryCode, flag}})=>{

                return <CountryCard image={flag} name={name} mobileCode={mobileCode} countryCode={countryCode} />;

            }}
        />

        </View>
    </View>
  )
}

export default CountryList

const styles = StyleSheet.create({})