import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, ChatCard, FormInputField, LoggedInContainer, Logo, Nav } from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { padding } from "../data/general";
import { CancelIcon, Search } from "../assets/icons";
import { chats } from "../data/chatData";

const Header = () => {
    const [searchEnabled, setSearchEnabled] = useState(false)
    const [searchText, setSearchText] = useState("")
    return(

        <>

            

                <View style={{
                    paddingVertical: 15,
                    paddingHorizontal: padding,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 10
                }}>

                    {searchEnabled? (
                        <FormInputField onChangeText={(text)=>{

                            setSearchText(text)

                        }} value={searchText} rightIconAction={()=>{
                            setSearchEnabled(false)
                            setSearchText("")
                        }} floatRightIcon={<CancelIcon set="bold" color={blackColor.opacity600} />} inputStyle={{
                            paddingVertical: 8,
                        }} style={{
                            width: "100%"
                        }} />
                    ) : (

                        <>
                        
                            <Text style={{
                                fontFamily: lato.bold.default,
                                fontSize: 20,
                            }}>Messages</Text>

                            <TouchableOpacity onPress={()=>{
                                setSearchEnabled(true)
                            }}>
                                <Search color={blackColor.opacity500} />
                            </TouchableOpacity>
                        </>


                    
                    )}

                </View>
        
        </>
    )
}

const Chats = () => {
  const { navigate } = useNavigation();
  return (
    <LoggedInContainer
        header={<Header />}
    >
        <View style={{
            flex: 1,
            paddingVertical: 15
        }}>


            <FlatList
                contentContainerStyle={{
                    gap: 30
                }}
                data={chats}
                extraData={chats}
                keyExtractor={(_, index)=>index}
                renderItem={({item: {image, name, status, messages}, index})=>{
                    var unreadMessages = 0;
                    var lastMessage = ""

                    if(Array.isArray(messages)){
                        lastMessage = messages[messages.length - 1].message
                       unreadMessages =  messages.filter(message => message?.status?.toLowerCase() === "unread").length;
                    }

                    return(
                        <ChatCard image={image} name={name} lastMessage={lastMessage} status={status} unreadMessageCount={unreadMessages} />
                    )
                }}
            
            />

        </View>
        

    </LoggedInContainer>
  );
};

export default Chats;

const styles = StyleSheet.create({});
