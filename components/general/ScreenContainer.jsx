import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { whiteColor } from '../../assets/colors';

const ScreenContainer = ({children}) => {
  return <View style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor='transparent' translucent />

        

      <View style={{ flex: 1 }}>
        {children}
      </View>
    </View>;
}

export default ScreenContainer

const styles = StyleSheet.create({})