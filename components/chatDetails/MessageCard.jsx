import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { lato } from '../../fonts';
import { blackColor, primaryColor } from '../../assets/colors';
import { formatDate } from '../../functions';

const windowWidth = Dimensions.get("window").width;

const MessageCard = ({message, type, time, style}) => {
  return (
    <View style={{
        width: "100%",
        alignItems: type === "sent"? "flex-end" : "flex-start",
        ...style
    }}>

        <View style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            maxWidth: (windowWidth * 0.6),
            backgroundColor: type === "sent"? primaryColor.opacity700 : blackColor.opacity100,
            borderRadius: 10,
            borderBottomLeftRadius: type !== "sent"? 0: 10,
            borderBottomRightRadius: type === "sent"? 0: 10,
            gap: 6
        }}>

            <Text style={{
                fontFamily: lato.regular.default
            }}>{message}</Text>

            <Text style={{
                fontFamily: lato.regular.default,
                fontSize: 10,
                textAlign: "right"
            }}>{formatDate({date: time, dateFormat: ["Y", "M", "D"], timeFormat: ["H", "M"], dateSeparator: "/"}).formattedDate}</Text>

        </View>
    </View>
  )
}

export default MessageCard

const styles = StyleSheet.create({})