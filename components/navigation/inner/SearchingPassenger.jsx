import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import AnimatedLottieView from 'lottie-react-native';
import { dangerColor, whiteColor } from '../../../assets/colors';
import { lato } from '../../../fonts';
import { LoadingBars } from '../../../assets/lotties';
import { padding } from '../../../data/general';
import Button from '../../general/Button';
import OnlineRequest from '../OnlineRequest';
import { useActionContext } from '../../../context';

const SearchingPassenger = () => {
   
    const {openModal} = useActionContext()

  const changeOnlineVisibility = useCallback(type => {
    if (type) {
      openModal({
        content: <OnlineRequest type={type} />,
        height: "100%",
        styles: {
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center"
        }
      });
    }
  }, []);
  
  return <View>
      <View style={{ padding, paddingBottom: 0 }}>
        <Button onPress={() => {
            changeOnlineVisibility("stop");
          }} style={{ backgroundColor: dangerColor.default }}>
          <Text style={{ color: whiteColor.default, fontFamily: lato.bold.default }}>
            Stop
          </Text>
        </Button>
      </View>

      <View style={{ backgroundColor: "#0074FF", padding: 15, marginTop: 30, borderTopRightRadius: 20, borderTopLeftRadius: 20, alignItems: "center", paddingBottom: 30 }}>
        <Text style={{ color: whiteColor.default, fontFamily: lato.bold.default }}>
          Scanning...
        </Text>

        <AnimatedLottieView style={{ width: 100, height: 30 }} source={LoadingBars} loop autoPlay />
      </View>
    </View>;
}

export default SearchingPassenger

const styles = StyleSheet.create({})