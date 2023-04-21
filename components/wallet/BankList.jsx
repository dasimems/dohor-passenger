import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { banks } from '../../data/walletData'
import BankCard from './inner/BankCard'

const BankList = () => {

    const [activeCard, setActiveCard] = useState("")

  return (
    <View style={{
        gap: 6
    }}>
      {banks.map(({bankName, id, accountNumber}, index) => (
        <BankCard activeId={activeCard} id={id} bankName={bankName} onChange={(id)=>{
            setActiveCard(id)
        }} accountNumber={accountNumber} key={index} />
      ))}
    </View>
  )
}

export default BankList

const styles = StyleSheet.create({})