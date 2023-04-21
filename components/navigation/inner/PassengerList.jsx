import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigationContext } from '../../../context'
import { padding } from '../../../data/general';
import PassengerCard from './PassengerCard';

const PassengerList = () => {
    const {passengers} = useNavigationContext();
  return (
    <View style={{
            padding: padding,
        }}>
            
            <FlatList 
                data={passengers}
                extraData={passengers}
                horizontal
                contentContainerStyle={{
                gap: 10
                }}
                keyExtractor={(_, index)=>index}
                renderItem={({item, index})=>{

                    const {name, image, rating, review, distance, from, to, id} = item;

                    return(
                        <PassengerCard name={name} passengerDetails={item} image={image} review={review} rating={rating} id={id} distance={distance} from={from?.destination} to={to?.destination}   />
                    )
            }}
            />

        </View>
  )
}

export default PassengerList

const styles = StyleSheet.create({})