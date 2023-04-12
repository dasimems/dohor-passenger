import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Button, ChatOptions, FormInputField, LoggedInContainer, Logo, MessageCard, Nav, RoundedImage } from "../components";
import { blackColor, primaryColor, successColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AddIcon, AngleLeft, SendIcon2 } from "../assets/icons";
import { padding } from "../data/general";
import { chats } from "../data/chatData";
import { useActionContext } from "../context";
import { SafeAreaView } from "react-native-safe-area-context";

const Header= ({image, name, status}) => {
    const {goBack} = useNavigation();
    return(
        <SafeAreaView style={{
            paddingVertical: 15, 
            paddingHorizontal: padding,
            borderBottomWidth: 1,
            borderBottomColor: blackColor.opacity100
        }}>
            
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10
            }}>

                <TouchableOpacity onPress={()=>{
                    goBack();
                }}>

                    <AngleLeft size={25} />
                </TouchableOpacity>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20
                }}>

                    <View style={{
                        position: "relative"
                    }}>

                        <RoundedImage image={image} imageContainerBackground={whiteColor.opacity700} imageParentBackground={blackColor.opacity100} imagePadding={2} size={38} />

                        {status && status.toLowerCase() === "online" && <View style={{
                            width: 10,
                            height: 10,
                            backgroundColor: successColor.default,
                            borderRadius: 90,
                            position: 'absolute',
                            top: 1,
                            right: -2
                        }}></View>}
                    </View>

                    <View style={{
                        gap: 3
                    }}>
                        <Text style={{
                            fontFamily: lato.bold.default
                        }}>{name}</Text>
                        {status && status.toLowerCase() === "online" && <Text style={{
                            fontFamily: lato.regular.default,
                            color: blackColor.opacity500
                        }}>{status}</Text>}
                    </View>


                </View>
            </View>
        </SafeAreaView>
    )
}

const ChatDetails = () => {
  const { goBack,navigate } = useNavigation();
  const {openModal } = useActionContext();
  const {params} = useRoute()
  const [chatDetails, setChatDetails] = useState(null)
  const [messageList, setMessageList] = useState([])

  const openOptions = useCallback(() => {

    openModal({
        content: <ChatOptions />,
        height: "auto",
        styles: {
            backgroundColor: "transparent",
            padding,
        }
    });

  }, [])

  useEffect(()=>{

    if(params.chatId){

        const chat = chats.find(chat => chat.id === params.chatId);

        if(chat){
            setChatDetails(chat);
            setMessageList(chat?.messages)
        }else{
            goBack();
        }

    }else{

        goBack();

    }

  }, [params])
  return (
    <LoggedInContainer
        navHidden
        header={<Header name={chatDetails?.name} status={chatDetails?.status} image={chatDetails?.image} />}
        containerStyle={{
            paddingHorizontal: 0
        }}

    >
        <View style={{
            flex: 1,
            paddingVertical: 15,
            paddingHorizontal: padding
        }}>

            <FlatList
                contentContainerStyle={{
                    gap: 10
                }}
                data={messageList}
                extraData={messageList}
                keyExtractor={(_, index)=> index}
                renderItem={({item: {message, type, time}})=>{
                    return(
                        <MessageCard message={message} type={type} time={time} />
                    )
                }}

            />

        </View>

        <View style={{
            paddingVertical: 15,
            backgroundColor: blackColor.opacity100,
            flexDirection: "row", 
            alignItems: "center",
            paddingHorizontal: padding,
            gap: 15
        }}>

            {/* <TouchableOpacity onPress={()=>{
                openOptions();
            }}>

                <AddIcon color={primaryColor.default} size={25} />

            </TouchableOpacity> */}

            <FormInputField multiline style={{flex: 1}} inputStyle={{paddingVertical: 6, borderRadius: 20, backgroundColor: whiteColor.opacity700, borderWidth: 0, maxHeight: 100}} />

            <TouchableOpacity>

                <SendIcon2 set="bold" size={25} color={primaryColor.default} />

            </TouchableOpacity>


        </View>
    </LoggedInContainer>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({});
