import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import RoundedImage from '../general/RoundedImage'
import { blackColor, successColor, whiteColor } from '../../assets/colors'
import { lato } from '../../fonts'
import { useNavigation } from '@react-navigation/native'
import { NavNames } from '../../data/general'

const ChatCard = ({image, id, status, name, lastMessage, unreadMessageCount}) => {
    const {navigate} = useNavigation()
  return (
    <TouchableOpacity onPress={()=>{
        navigate(NavNames.ChatDetails.name, {chatId: id});
    }} style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between"
    }}>

        <View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20
        }}>

            <View style={{position: "relative"}}>

                <RoundedImage image={image} imageParentBackground={blackColor.opacity200} imageContainerBackground={whiteColor.opacity700} />

                {status && status.toLowerCase() === "online" && <View style={{position: "absolute",
                    backgroundColor: successColor.default,
                    width: 10,
                    height: 10,
                    borderRadius: 100,
                    right: 2,
                    top: 2
            
                }}></View>}
            </View>


            <View style={{
                gap: 6
            }}>
                <Text style={{
                    fontFamily: lato.bold.default
                }}>{name}</Text>

                <Text style={{
                    fontFamily: unreadMessageCount && parseInt(unreadMessageCount) > 0? lato.bold.default : lato.regular.default,
                    color: unreadMessageCount && parseInt(unreadMessageCount) > 0? blackColor.default : blackColor.opacity600,
                    fontSize: 12
                }}>{lastMessage}</Text>
                

            </View>
        </View>

        {unreadMessageCount && parseInt(unreadMessageCount) > 0? <View style={{
            width: 17,
            height: 17,
            borderRadius: 90,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FDFD96"
        }}>

            <Text style={{
                fontFamily: lato.regular.default,
                fontSize: 13
            }}>{unreadMessageCount}</Text>

        </View> :  null}
    </TouchableOpacity>
  )
}

export default ChatCard

const styles = StyleSheet.create({})