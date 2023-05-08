import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { banks } from '../../data/walletData'
import BankCard from './inner/BankCard'

const BankList = ({onChange}) => {

  if (!onChange) {
    onChange = () => {};
  }

    const [activeCard, setActiveCard] = useState("")

    const changeBank = useCallback((bank)=>{
      onChange(bank);
    }, [onChange])

    useEffect(()=>{
      changeBank(activeCard)
    }, [activeCard, changeBank])

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