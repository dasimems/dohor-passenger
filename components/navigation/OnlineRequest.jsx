import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { blackColor, dangerColor, successColor, whiteColor } from '../../assets/colors'
import { CheckCircleIcon } from '../../assets/icons'
import { lato } from '../../fonts'
import { useActionContext, useUserContext } from '../../context'

const OnlineRequest = ({type}) => {

    const {closeModal} = useActionContext();
    const { openToWork, closedWork } = useUserContext();

    const performOnlineAction = useCallback(() => {

        if(type === "start"){
            openToWork();

        }else{
            closedWork();

        }
        closeModal();

    }, [type])

  return (
    <View style={{
         backgroundColor: whiteColor.default,
         borderRadius: 15,
         alignItems: "center",
         justifyContent: "center",
         width: "85%",
         overflow: "hidden"
    }}>

        <View style={{
            padding: 15,
            alignItems: "center",
            justifyContent: "center",
            gap: 10
        }}>

            <CheckCircleIcon size={70} color={type === "start"? successColor.default : dangerColor.default} />
            <Text style={{
                fontFamily: lato.bold.default,
                textAlign: "center"
            }}>Go {type === "start" ? "Online" : "Offline"}</Text>
            <Text style={{
                fontFamily: lato.regular.default,
                color: blackColor.opacity600,
                textAlign: "center"
            }}>Do you want to go {type === "start" ? "online" : "offline"} in the current location?</Text>
        </View>

        <View
            style={{
                borderTopWidth: 1,
                borderTopColor: blackColor.opacity100,
                width: "100%",
                flexDirection: "row",
                marginTop: 20,
                alignItems: 'center'
            }}
        >

            <TouchableOpacity onPress={()=>{closeModal()}} style={{
                width: "50%",
                padding: 15,
                borderRightWidth: 1,
                borderRightColor: blackColor.opacity100,
                alignItems: "center",
                justifyContent: "center",
            }}>

                <Text style={{
                    fontFamily: lato.bold.default,
                    color: blackColor.opacity500

                }}>Cancel</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                performOnlineAction()
            }} style={{
                width: "50%",
                padding: 15,
                alignItems: "center",
                justifyContent: "center"
            }}>

                <Text style={{
                    fontFamily: lato.bold.default,
                    color: type === "start"? successColor.default : dangerColor.default

                }}>Yes</Text>

            </TouchableOpacity>

        </View>

    </View>
  )
}

export default OnlineRequest

const styles = StyleSheet.create({})