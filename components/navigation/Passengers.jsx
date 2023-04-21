import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigationContext } from '../../context'
import { padding } from '../../data/general';
import PassengerCard from './inner/PassengerCard';
import PassengerDetails from './inner/PassengerDetails';
import PassengerList from './inner/PassengerList';

const Passengers = () => {
    const {activePassenger} = useNavigationContext();
  return (

    !activePassenger? 
        <PassengerList />
        :

        <PassengerDetails />
  )
}

export default Passengers

const styles = StyleSheet.create({})