import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { blackColor, primaryColor, whiteColor } from '../../assets/colors'
import { lato } from '../../fonts'
import { CameraIcon, DocumentIcon, ImageIcon } from '../../assets/icons'
import { useActionContext } from '../../context'

const ChatOptions = () => {

    const {closeModal} = useActionContext();

  return <View style={{ gap: 6 }}>
      <View style={{ width: "100%", borderRadius: 10, paddingVertical: 5, backgroundColor: whiteColor.default }}>
        <TouchableOpacity style={{ ...styles.optionButtonStyle }}>
          <CameraIcon color={primaryColor.default} />

          <Text style={{ ...styles.optionTextStyle }}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.optionButtonStyle }}>
          <ImageIcon color={primaryColor.default} />

          <Text style={{ ...styles.optionTextStyle }}>Photos & Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.optionButtonStyle, borderBottomWidth: 0 }}>
          <DocumentIcon color={primaryColor.default} />

          <Text style={{ ...styles.optionTextStyle }}>
            Document
          </Text>
        </TouchableOpacity>
      </View>

      <Pressable onPress={()=>{

        closeModal();

      }} style={{ padding: 15, width: "100%", borderRadius: 10, backgroundColor: whiteColor.default, alignItems: "center" }}>
        <Text style={{ fontFamily: lato.bold.default }}>Cancel</Text>
      </Pressable>
    </View>;
}

export default ChatOptions

const styles = StyleSheet.create({
  optionTextStyle: {
    fontFamily: lato.regular.default
  },
  optionButtonStyle: {
    flexDirection: "row",
    gap: 20,
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: blackColor.opacity100

  }
});