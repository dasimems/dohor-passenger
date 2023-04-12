import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, ChatCard, FormInputField, LoggedInContainer, Logo, Nav } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { padding } from "../data/general";
import { AngleLeft, CancelIcon, Search } from "../assets/icons";
import { chats } from "../data/chatData";
import { SafeAreaView } from "react-native-safe-area-context";

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
                        }}>Messages</Text>

                    </View>
                        

                    {/* <TouchableOpacity onPress={()=>{
                        setSearchEnabled(true)
                    }}>
                        <Search color={blackColor.opacity500} />
                    </TouchableOpacity> */}

                </SafeAreaView>
        
        </>
    )
}

const Chats = () => {
  const { navigate } = useNavigation();
    const [searchText, setSearchText] = useState("")
  return (
    <LoggedInContainer
        header={<Header />}
    >

        <View>
            <FormInputField placeholder="Search" onChangeText={(text)=>{

                setSearchText(text)

            }} value={searchText} floatLeftIcon={<Search size={16} color={blackColor.opacity400} />}  rightIconAction={()=>{
                setSearchText("")
            }} floatRightIcon={searchText.length > 0? <CancelIcon set="bold" color={blackColor.opacity600} /> : null} inputStyle={{
                paddingVertical: 8,
                borderWidth: 0,
                backgroundColor: blackColor.opacity100
            }} style={{
                width: "100%"
            }} />
        </View>

        <View style={{
            flex: 1,
            paddingVertical: 15,
            marginTop: 20
        }}>


            <FlatList
                contentContainerStyle={{
                    gap: 30
                }}
                data={chats}
                extraData={chats}
                keyExtractor={(_, index)=>index}
                renderItem={({item: {image, name, status, messages, id}, index})=>{
                    var unreadMessages = 0;
                    var lastMessage = ""

                    if(Array.isArray(messages)){
                        lastMessage = messages[messages.length - 1].message
                       unreadMessages =  messages.filter(message => message?.status?.toLowerCase() === "unread").length;
                    }

                    return(
                        <ChatCard id={id} image={image} name={name} lastMessage={lastMessage} status={status} unreadMessageCount={unreadMessages} />
                    )
                }}
            
            />

        </View>
        

    </LoggedInContainer>
  );
};

export default Chats;

const styles = StyleSheet.create({});
