import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Nav from "./Nav";
import { whiteColor } from "../../assets/colors";
import { padding } from "../../data/general";
import { AngleLeft } from "../../assets/icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { lato } from "../../fonts";

const LoggedInContainer = ({children, header, showBackFunction}) => {

    const {name: screenName} = useRoute();
    const {goBack} = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: whiteColor.default
      }}
    >

    <View>

        {header? header : <>
        
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
                paddingHorizontal: padding
            }}>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5
                    
                }}>

                    {showBackFunction && <TouchableOpacity onPress={goBack}>

                        <AngleLeft size={20} />

                    </TouchableOpacity>}

                    <Text style={{
                        fontFamily: lato.bold.default
                    }}>{screenName}</Text>
                </View>



            </View>
        
        </>}

    </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: padding
        }}
      >
        {children}
      </View>

      <Nav />
    </View>
  );
};

export default LoggedInContainer;

const styles = StyleSheet.create({});
