import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { lato } from '../../../fonts'
import { blackColor, primaryColor } from '../../../assets/colors'
import { TouchableOpacity } from 'react-native'
import { Bank } from '../../../assets/icons'

const BankCard = ({bankName, accountNumber, id, activeId, onChange, accountName}) => {

    if(!accountNumber){
        accountNumber =  "";
    }else{
        accountNumber = accountNumber.toString();
    }
    
    if(!onChange){
        onChange = () => {

        }
    }
  return (
    <TouchableOpacity onPress={()=>{

        if(id){

            onChange(id)
        }
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

            <Bank size={28} />

            <View style={{
                gap: 4

            }}>

                <Text style={{
                    fontFamily: lato.black.default
                }}>{bankName}</Text>

                <Text style={{
                    fontFamily: lato.regular.default,
                    color: blackColor.opacity500
                }}>{accountNumber.slice(0, 3)}****{accountNumber.slice(accountNumber.length - 3,)}</Text>

            </View>
        </View>
        
        <View style={{
            width: 15,
            height: 15,
            backgroundColor: blackColor.opacity100,
            borderRadius: 50,
            padding: 3
        }}>

            {(activeId && activeId === id) && <View style={{
                width: "100%",
                height: "100%",
                backgroundColor: primaryColor.default,
                borderRadius: 100
            }}></View>}

        </View>
    </TouchableOpacity>
  )
}

export default BankCard

const styles = StyleSheet.create({})