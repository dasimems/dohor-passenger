import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './Logo'

const Logo2 = () => {
  return (
    <View style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    }}>
      <Logo image imageSize={50} /><Logo />
    </View>
  )
}

export default Logo2

const styles = StyleSheet.create({})