import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, EarningChart, LoggedInContainer, Logo, Nav } from "../components";
import { blackColor, dangerColor, primaryColor, successColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { Wallet } from "../assets/icons";
import { NavNames } from "../data/general";
import { dateList } from "../data/earningData";

const windowWidth = Dimensions.get("window").width;

const EarningStatCard = ({title, stat, color}) => {
    return(
        <View style={{
            gap: 15,
            alignItems: 'center'
        }}>
            <Text style={{
                fontFamily: lato.bold.default,
                color: blackColor.opacity600
            }}>{title}</Text>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4
            }}>
                <Wallet size={12} color={color? color : blackColor.default} />
                <Text style={{
                    fontFamily: lato.bold.default,
                    color: color? color : blackColor.default
                }}>{stat}</Text>
            </View>
        </View>
    )
}

const Earnings = () => {
  const { navigate } = useNavigation();
  const [activeDate, setActiveDate] = useState("")

  useEffect(()=>{
    setActiveDate(dateList[0])
  }, [dateList])
  return (
    <LoggedInContainer headerTextStyle={{
        fontSize: 16,
        marginLeft: 10
    }} showBackFunction headerText="Earnings">

        <ScrollView>

            <View style={{
                gap: 30,
                paddingTop: 20
                
            }}>

                <FlatList
                    contentContainerStyle={{
                        gap: 20,
                        marginBottom: 20
                    }} 
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={dateList}
                    extraData={dateList}
                    keyExtractor={(_, index)=>index}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>{
                            setActiveDate(item)
                        }}>
                            <Text style={{
                                fontFamily: lato.bold.default,
                                color: activeDate === item? primaryColor.default : blackColor.opacity500
                            }}>{item}</Text>
                        </TouchableOpacity>
                    )}

                />

                <EarningChart />

                <Text style={{
                    fontFamily: lato.bold.default,
                    fontSize: 15
                }}>Earning  Summary</Text>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: 'center'
                }}>

                    <EarningStatCard color={successColor.opacity700} title="Total Earnings" stat="23450" />
                    <EarningStatCard color={dangerColor.opacity700} title="In cash" stat="23450" />
                    <EarningStatCard color={"#408EC7"} title="In App" stat="23450" />

                </View>


                <TouchableOpacity onPress={()=>{
                    navigate(NavNames.Wallet.name)
                }} style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    width: windowWidth * 0.6,
                    alignSelf: "center",
                    alignItems: "center",
                    backgroundColor: primaryColor.default,
                    borderRadius: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 6,

                }}>

                    <Wallet color={whiteColor.default} />
                    <Text style={{
                        fontFamily: lato.bold.default,
                        color: whiteColor.default
                    }}>Wallet</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    </LoggedInContainer>
  );
};

export default Earnings;

const styles = StyleSheet.create({});
