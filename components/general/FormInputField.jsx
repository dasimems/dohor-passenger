import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import React from "react";
import { blackColor } from "../../assets/colors";
import { lato } from "../../fonts";

const FormInputField = ({
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
  ...props
}) => {

 
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
          placeholder={placeholder ? placeholder : "Input"}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : blackColor.opacity200
          }
          cursorColor={cursorColor ? cursorColor : blackColor.opacity300}
          onBlur={Keyboard.dismiss}
          style={{
            borderWidth: 1,
            borderColor: blackColor.opacity200,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingLeft: floatLeftIcon? 36 : 15,
            paddingRight: floatRightIcon? 32 : 15,
            paddingVertical: 10,
            flex: 1,
            fontFamily: lato.regular.default,
            ...inputStyle
          }}
          {...props}
          selectionColor={selectionColor? selectionColor: blackColor.opacity300}
        />

        {floatLeftIcon && <TouchableOpacity
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            paddingHorizontal: 10,
            paddingVertical: 10,
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
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            paddingHorizontal: 10,
            paddingVertical: 10,
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
};

export default FormInputField;
