import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { banks } from '../../data/walletData'
import BankCard from './inner/BankCard'
import { Money } from '../../assets/icons'
import { lato } from '../../fonts'
import { blackColor, primaryColor } from '../../assets/colors'

const BankList = ({onChange}) => {

  if (!onChange) {
    onChange = () => {};
  }

    const [activeCard, setActiveCard] = useState("cash")

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
      <TouchableOpacity onPress={()=>{

          setActiveCard("cash")
                        
        }} style={{
            paddingVertical: 15,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>

            <View style={{
                flexDirection: "row",
                gap: 15,
                alignItems: "center",

            }}>

                <Money size={28} />

                <View style={{
                    gap: 4

                }}>

                    <Text style={{
                        fontFamily: lato.black.default
                    }}>Cash</Text>

                </View>
            </View>
            
            <View style={{
                width: 15,
                height: 15,
                backgroundColor: blackColor.opacity100,
                borderRadius: 50,
                padding: 3
            }}>

                {activeCard === "cash"&& <View style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: primaryColor.default,
                    borderRadius: 100
                }}></View>}

            </View>
        </TouchableOpacity>
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