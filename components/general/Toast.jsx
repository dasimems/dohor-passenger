import { Animated, StyleSheet, Text, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useActionContext } from '../../context';
import { blackColor, successColor, whiteColor } from '../../assets/colors';

const Toast = () => {

  const { toastMessage, toastDuration, setToastDuration, toastType, closeToast } = useActionContext();
  const animatedRef = useRef(new Animated.Value(0)).current;

  var textColor = blackColor.opacity700;
  var bgColor = "#DFE0E0";
  var animationTiming = 200

  if(toastType === "error"){

    textColor = whiteColor.default
    bgColor = "#DA2C43";


  }else if(toastType === "success"){

     textColor = whiteColor.default;
     bgColor = successColor.default;
    //  bgColor = "#50C878";

  }

  const fadeIn = () => {

    Animated.timing(animatedRef, {
      toValue: 1,
      duration: animationTiming,
      useNativeDriver: true
    }).start();

  }
   const fadeOut = () => {
     Animated.timing(animatedRef, {
       toValue: 0,
       duration: animationTiming,
       useNativeDriver: true
     }).start();
   };

  useEffect(()=>{

    if(toastMessage){

      fadeIn();


      var toastMessageTime = setTimeout(()=>{
  
        if(toastDuration - 1000 <= 0){
          fadeOut();
          clearTimeout(toastMessageTime);
          setTimeout(() => {
            closeToast();
          }, (animationTiming + 100));
          
        }else{
          setToastDuration(toastDuration - 1000)
        }
  
  
      }, 1000)

    }
  }, [toastMessage, toastDuration])

  return (


      toastMessage && <Animated.View
          style={{
            position: 'absolute',
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            bottom: 10,
            left: 0,
            zIndex: 9999,
            elevation: 9999,
            opacity: animatedRef
  
          }}
  
        >
  
          
          <Pressable
            onPress={closeToast}
            style={{
              width: "auto",
              paddingVertical: 7,
              paddingHorizontal: 15,
              backgroundColor: bgColor,
              borderRadius: 1000
            }}
          >
  
            <Text style={{
              color: textColor
            }}>{toastMessage}</Text>
  
          </Pressable>
          
  
          
      </Animated.View>
  )
}

export default Toast

const styles = StyleSheet.create({})