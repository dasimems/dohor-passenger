import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { blackColor, primaryColor, successColor, whiteColor } from '../../assets/colors'
import MapView, {Marker, PROVIDER_GOOGLE } from "react-native-maps";
import useNavigationContext from '../../context/navigationContext';
import AnimatedLottieView from 'lottie-react-native';
import { LocationPin } from '../../assets/lotties';
import { lato } from '../../fonts';
import {GOOGLE_API_KEY} from "@env";
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
  const {from, fetchLocation, to} = useNavigationContext();
  const mapRef = useRef(null);
  const [fitOnce, setFitOnce] = useState(false)

  const fitMap = (type) => {

    mapRef.current.fitToCoordinates([{latitude: from.latitude, longitude: from.longitude}], {
      edgePadding: {
        top: type === "from" ? 200 : 50,
        left: type === "from" ? 200 : 50,
        bottom: type === "from" ? 200 : 50,
        right: type === "from" ? 200 : 50,

      }
    })

  }


  useEffect(()=>{

    if(from && !fitOnce){

      fitMap()

      setFitOnce(true)
    }

  },[from, fitOnce])
  
  
  useEffect(()=>{
    if(!from){
      fetchLocation();
    }

    
  }, [from])

  return (
    <View style={{
        flex: 1,
        backgroundColor: blackColor.opacity100
    }}>

      
      {from && <MapView 
        ref={mapRef}
      style={{
          flex: 1,
          width: "100%",
          height: "100%",

        }}
        provider={PROVIDER_GOOGLE}
        // mapType="mutedStandard"
        showsUserLocation={true}
        followsUserLocation={true}
        showsCompass={true}
        showsTraffic={true}

        initialRegion={{
          latitude: from && from.latitude? from?.latitude: 37.78825,
          longitude: from && from.longitude? from?.longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        
      >

          {from && <Marker
            coordinate={{latitude: from && from.latitude? from.latitude: 37.78825, longitude: from && from.longitude? from.longitude: -122.4324}}
            title="Your present location"
            description="Your present location"
          />}

          {to && <Marker
            coordinate={{latitude: to && to.latitude? to.latitude: 37.78825, longitude: to && to.longitude? to.longitude: -122.4324}}
            title="Your Destination"
            description={to.description? to.description : "Your Destination"}
          /> }

          {from && to && <MapViewDirections
            origin={{latitude: from?.latitude, longitude: from?.longitude}}
            destination={{latitude: to?.latitude, longitude: to?.longitude}}
            apikey={GOOGLE_API_KEY}
            resetOnChange={false}
            strokeWidth={5}
            strokeColor={successColor.default}
            // mode="driving"
          />}

          

      </MapView>}
      
      {!from && <View style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: whiteColor.default,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9
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