import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Logo } from '../components'
import { blackColor, primaryColor, whiteColor } from '../assets/colors'
import { lato } from '../fonts'
import { useNavigation } from '@react-navigation/native'
import { NavNames } from '../data/general'
import { SplashBackground } from '../assets/images'
import { StatusBar } from 'expo-status-bar'

const GettingStarted = () => {
    
    const { navigate } = useNavigation();
  return (
    <View style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
        position: "relative",
        backgroundColor: whiteColor.default
    }}>

      <StatusBar backgroundColor="transparent" translucent={true} />

      <Image source={SplashBackground} style={{
        ...StyleSheet.absoluteFillObject
      }} />

        <View style={{
            flex: 1
        }}>

            <ScrollView contentContainerStyle={{
                flex: 1,
                alignItems: "center",
                gap: 50,
                justifyContent: "space-between",
                paddingBottom: 100
            }}>

                <View></View>

                <Logo image />

                <View>

                  <Text style={{
                      textAlign: "center",
                      fontFamily: lato.regular.default,
                      fontFamily: lato.bold.default,
                      fontSize: 29
                  }}>Welcome to Dohor</Text>
                  <Text style={{
                      textAlign: "center",
                      fontFamily: lato.regular.default,
                      color: blackColor.opacity600,
                      marginTop: 20,
                      fontSize: 18
                  }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

                </View>



            </ScrollView>
        </View>


      <Button onPress={()=>{
        navigate(NavNames.Login.name)
      }} textColor={whiteColor.default} style={{
        backgroundColor: primaryColor.default,
        marginTop: 100
      }} text="GET STARTED"  />
    </View>
  )
}

export default GettingStarted

const styles = StyleSheet.create({})