import { StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList, Animated, PanResponder } from "react-native";
import React, { useEffect, useRef } from "react";
import { primaryColor, whiteColor } from "../../assets/colors";
import { NavNames, padding, screenNav } from "../../data/general";
import { AngleLeft, AngleRight } from "../../assets/icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { lato } from "../../fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import RoundedImage from "./RoundedImage";
import { MaleAvatarOne } from "../../assets/images";
import NavRoute from "./NavRoute";
import { useActionContext } from "../../context";

const windowWidth = Dimensions.get("window").width

const LoggedInContainer = ({children, header, headerText, spacing, headerTextStyle, headerStyle, showBackFunction, headerHidden, style, containerStyle}) => {
    const {menuOpened, closeMenu} = useActionContext()
    const {name: screenName} = useRoute();
    const {goBack, navigate} = useNavigation();
    const translateAnimation = useRef(new Animated.Value(0)).current;
    const scaleAnimation = useRef(new Animated.Value(1)).current;
    const borderRadiusAnimation = useRef(new Animated.Value(0)).current;
    const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        if (gesture.dx < 0) {

        }
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx < -windowWidth / 3) {

          closeMenu();
         
        } else {
          
        }
      },
    })
  ).current;
    // (windowWidth * 0.95)
    const animationDuration = 300;

    useEffect(()=>{

      if(menuOpened){

        Animated.parallel([
  
          Animated.timing(translateAnimation, {
            toValue: (windowWidth * 0.95),
            duration: animationDuration,
            useNativeDriver: true,
          }),
  
          Animated.timing(scaleAnimation, {
            toValue: 0.8,
            duration: animationDuration,
            useNativeDriver: true,
          }),
  
          Animated.timing(borderRadiusAnimation, {
            toValue: 40,
            duration: animationDuration,
            useNativeDriver: true,
          })
        ]).start()
          
      }else{

        Animated.parallel([
  
          Animated.timing(translateAnimation, {
            toValue: 0,
            duration: animationDuration,
            useNativeDriver: true,
          }),
  
          Animated.timing(scaleAnimation, {
            toValue: 1,
            duration: animationDuration,
            useNativeDriver: true,
          }),
  
          Animated.timing(borderRadiusAnimation, {
            toValue: 0,
            duration: animationDuration,
            useNativeDriver: true,
          })
        ]).start()

      }




      
    },[menuOpened])

  return (

    <>

      <View {...panResponder.panHandlers} style={{
        
          ...StyleSheet.absoluteFillObject,
          backgroundColor: primaryColor.default

      }}>

        <SafeAreaView
          style={{
            flex: 1,
            paddingHorizontal: padding
          }}
        >

          <View style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginTop: 25
          }}>
            <TouchableOpacity onPress={()=>{
              closeMenu()
              setTimeout(()=>{
                navigate(NavNames.Profile.name)
              })
            }}>
              <RoundedImage size={70} image={MaleAvatarOne} />
              
            </TouchableOpacity>

            <View style={{
              gap: 6,
              alignItems: "flex-start"
            }}>

              <Text style={{
                color: whiteColor.default,
                fontFamily: lato.bold.default,
                fontSize: 17
              }}>John Doe</Text>

              <Text style={{
                color: whiteColor.opacity600,
                fontFamily: lato.regular.default,
                fontSize: 12
              }}>+ (234) 903-3663-4645</Text>

              {/* <TouchableOpacity onPress={()=>{
                closeMenu()
                setTimeout(()=>{
                  navigate(NavNames.CreditDetails.name)
                })
              }} style={{
                flexDirection: "row",
                backgroundColor: whiteColor.default,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 100,
                width: "auto",
                gap: 10,
                alignItems: "center"
              }}>
                <Text style={{
                  fontFamily: lato.bold.default,
                  fontSize: 12,
                }}>Credit</Text>
                <Text style={{
                  fontFamily: lato.bold.default,
                  fontSize: 12,
                  color: "#0074FF"
                }}>2500</Text>

                <AngleRight size={14} />
              </TouchableOpacity> */}

            </View>
          </View>

          <View style={{
            flex: 1,
            paddingVertical: 25,
            marginTop: 15
          }}>

            <FlatList
              contentContainerStyle={{
                gap: 30
              }}
              showsVerticalScrollIndicator={false}
              data={screenNav}
              extraData={screenNav}
              keyExtractor={(_,index)=>index}
              renderItem={({item: {Icon, label, name}})=>(
                <NavRoute icon={<Icon set="bold" color={whiteColor.default} size={30} />} label={label} name={name} />
              )}
           
           
          />

          </View>



        </SafeAreaView>


      </View>
    
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: whiteColor.default,
          overflow: "hidden",
          ...StyleSheet.absoluteFillObject,
          zIndex:999,
          elevation: 999,
          transform: [{scale: scaleAnimation}, {translateX: translateAnimation}],
          borderRadius: borderRadiusAnimation,
          ...style
        }}
      >
          {!headerHidden && (header? header : <>
          
              <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 10,
                  paddingHorizontal: padding,
                  ...headerStyle
              }}>

                <SafeAreaView>
                  <View style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: spacing? spacing : 5,
                      
                  }}>

                      {showBackFunction && <TouchableOpacity onPress={goBack}>

                          <AngleLeft size={20} />

                      </TouchableOpacity>}

                      <Text style={{
                          fontFamily: lato.black.default,
                          fontSize: 20,
                          ...headerTextStyle
                      }}>{headerText? headerText : screenName}</Text>
                  </View>

                </SafeAreaView>




              </View>
          
          </>)}
        <View
          style={{
            flex: 1,
            paddingHorizontal: padding,
            ...containerStyle
          }}
        >
          {children}
        </View>
      </Animated.View>
    
    </>
  );
};

export default LoggedInContainer;

const styles = StyleSheet.create({});
