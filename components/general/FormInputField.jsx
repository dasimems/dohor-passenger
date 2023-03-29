import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import React, { useState } from "react";
import { blackColor } from "../../assets/colors";
import { lato } from "../../fonts";

const FormInputField = React.forwardRef(({
  label,
  labelStyle,
  inputStyle,
  placeholder,
  placeholderTextColor,
  cursorColor,
  style,
  floatLeftIcon,
  floatLeftIconStyle,
  floatRightIconStyle,
  floatIconStyle,
  selectionColor,
  floatRightIcon,
  rightIconAction,
  leftIconAction,
  removePlaceholder,
  disableKeyboardAutoHide,
  ...props
}, ref) => {

  const [leftIconStyle, setLeftIconStyle] = useState(15)
  const [rightIconStyle, setRightIconStyle] = useState(15)
 
  return (
    <View style={{ ...style }}>
      {label &&
        <Text
          style={{
            fontWeight: "500",
            fontSize: 16,
            fontFamily: lato.regular.default,
            ...labelStyle
          }}
        >
          {label}
        </Text>}

      <View
        style={{
            marginTop: 7,
            flexDirection: "row",
            overflow: "hidden"
        }}
      >

        <TextInput
          ref={ref}
          placeholder={!removePlaceholder? placeholder ? placeholder : "Input" : ""}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : blackColor.opacity200
          }
          cursorColor={cursorColor ? cursorColor : blackColor.opacity300}
          onBlur={() => {
            if(!disableKeyboardAutoHide){

              Keyboard.dismiss
            }
          
          }}
          style={{
            borderWidth: 1,
            borderColor: blackColor.opacity200,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingLeft: leftIconStyle,
            paddingRight: rightIconStyle,
            paddingVertical: 10,
            flex: 1,
            fontFamily: lato.regular.default,
            ...inputStyle
          }}
          {...props}
          selectionColor={selectionColor? selectionColor: blackColor.opacity300}
        />

        {floatLeftIcon && <TouchableOpacity
         onLayout={(event)=>{
            var { width } = event.nativeEvent.layout;
            setLeftIconStyle(width)

          }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            paddingHorizontal: 10,
            paddingRight: 5,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            ...floatIconStyle,
            ...floatLeftIconStyle
          }}
          onPress={()=>{
            
            if(leftIconAction){
              leftIconAction()
            }
          
          }}
        >
          {floatLeftIcon}
        </TouchableOpacity>}

        {floatRightIcon && <TouchableOpacity

          onLayout={(event)=>{
            var { width } = event.nativeEvent.layout;
            setRightIconStyle(width)

          }}
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            paddingHorizontal: 10,
            paddingRight: 5,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            ...floatIconStyle,
            ...floatRightIconStyle
          }}

          onPress={()=>{
            if(rightIconAction){

              rightIconAction()
            }
          }}
        >
          {floatRightIcon}
        </TouchableOpacity>}

      </View>

    </View>
  );
});



FormInputField.displayName = "Input Field";

export default FormInputField;
