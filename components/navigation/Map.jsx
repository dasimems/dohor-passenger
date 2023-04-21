import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blackColor } from '../../assets/colors'
import MapView, {Marker} from "react-native-maps";
import useNavigationContext from '../../context/navigationContext';
import AnimatedLottieView from 'lottie-react-native';
import { LocationPin } from '../../assets/lotties';
import { lato } from '../../fonts';

const Map = () => {
  const {from} = useNavigationContext();
  return (
    <View style={{
        flex: 1,
        backgroundColor: blackColor.opacity100
    }}>

      
      {from? <MapView style={{
          flex: 1
        }}
        initialRegion={{
          latitude: from && from.latitude? from?.latitude: 37.78825,
          longitude: from && from.longitude? from?.longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        
      >

          {from && <Marker
            coordinate={{latitude: from.latitude? from.latitude: 37.78825, longitude: from.longitude? from.longitude: -122.4324}}
            title="Your present location"
            description="Your present location"
          />}

      </MapView>: <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10
      }}>

        <AnimatedLottieView source={LocationPin} autoPlay loop style={{
          width: 100, height: 100
        }} />

        <Text style={{
          fontFamily: lato.bold.default,
          fontSize: 15,
          color: blackColor.default,
          textAlign: "center"
        }}>Getting location...</Text>
        
        
        </View>}
        
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})