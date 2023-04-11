import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LoggedInContainer, TripCard, TripFilter } from '../components'
import { trips } from '../data/tripsData'

const Trips = () => {
  const [tripData, setTripData] = useState([])
  const [activeTripType, setActiveTripType] = useState("")

  useEffect(()=>{

    
    if(activeTripType){
      setTripData(trips.filter(trips => trips.status.toLowerCase() === activeTripType.toLowerCase()))
    }else{
      setTripData(trips)

    }

  }, [activeTripType])

  return (
    <LoggedInContainer headerText="Trip History">
      <View style={{
        marginTop: 10,
        flex: 1
      }}>
        <TripFilter onChange={(type)=>{
          setActiveTripType(type);
        }} />

        <View style={{
          flex: 1,
          paddingTop: 20,
        }}>

          <FlatList
            contentContainerStyle={{
              width: "100%",
              gap: 20
            }}
            data={tripData}
            extraData={tripData}
            keyExtractor={(_, index) => index}
            renderItem={({item: {date, passengerName, price, trip, status, image}})=>{
              
              return <TripCard image={image} date={date} name={passengerName} price={price} from={trip?.from} to={trip?.to} status={status} />;}}
          />

        </View>
      </View>
    </LoggedInContainer>
  )
}

export default Trips

const styles = StyleSheet.create({})