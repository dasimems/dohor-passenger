import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, LoggedInContainer, Logo, Nav, NotificationCard } from "../components";
import { blackColor, dangerColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AngleLeft } from "../assets/icons";
import { padding } from "../data/general";
import { notificationList } from "../data/notificationData";


const Header = () => {
    const {goBack} = useNavigation();
    return(

        <>

            

                <SafeAreaView style={{
                    paddingVertical: 15,
                    paddingHorizontal: padding,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 10
                }}>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 15
                    }}>

                        <TouchableOpacity onPress={()=>{
                            goBack();
                        }}>
                            <AngleLeft />

                        </TouchableOpacity>

                        <Text style={{
                            fontFamily: lato.bold.default,
                            fontSize: 20,
                        }}>Notifications</Text>

                    </View>
                        

                    <View style={{
                        backgroundColor: dangerColor.default,
                        width: 23,
                        height: 23,
                        borderRadius: 90,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            color: whiteColor.default,
                            fontFamily: lato.regular.default,
                            fontSize: 12,
                        }}>12</Text>
                    </View>

                </SafeAreaView>
        
        </>
    )
}

const Notifications = () => {
  const { navigate } = useNavigation();
  return (
    <LoggedInContainer
        header={<Header />}
    >

        <View style={{
            flex: 1
        }}>

            <FlatList
                data={notificationList}
                extraData={notificationList}
                keyExtractor={(_, index) => index}
                renderItem={({item:{title, description, icon}})=>(
                    <NotificationCard title={title} description={description} image={icon} />
                )}
            />

        </View>
    </LoggedInContainer>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
