import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { blackColor, dangerColor, primaryColor, whiteColor } from '../../../assets/colors'
import RoundedImage from '../../general/RoundedImage'
import { lato } from '../../../fonts'
import Stars from '../../general/Stars'
import { LocationIcon } from '../../../assets/icons'
import Button from '../../general/Button'
import { useNavigationContext } from '../../../context'

const windowWidth = Dimensions.get("window").width

const PassengerCard = ({image, name, rating, review, distance, from, id, passengerDetails}) => {
    const [rejectLoading, setRejectLoading] = useState(false)
    const {setPassengerSelected} = useNavigationContext();
  return <View style={{ padding: 20, backgroundColor: whiteColor.default, width: windowWidth * 0.8, borderRadius: 15, gap: 20 }}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={{ alignItems: "center", gap: 8 }}>
          <RoundedImage image={image} imageParentBackground={blackColor.opacity200} imageContainerBackground={whiteColor.opacity700} />
          <Text style={{ fontFamily: lato.black.default, textAlign: "center" }}>
            {name}
          </Text>

          <Stars active={rating} />

          <Text style={{ fontFamily: lato.regular.default, textAlign: "center", color: blackColor.opacity400 }}>
            {rating}({review})
          </Text>
        </View>

        <View style={{ flex: 1, gap: 8 }}>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontFamily: lato.bold.default }}>
              {distance / 1000}km
            </Text>
          </View>

          <View style={{ gap: 20 }}>
            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
              <LocationIcon />

              <Text style={{ ...styles.locationStyle }}>
                {from}
              </Text>
            </View>

            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
              <LocationIcon color={primaryColor.default} />

              <Text style={{ ...styles.locationStyle }}>
                {from}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        <Button loaderSize={19} loading={rejectLoading} loadingStyle={{ ...styles.buttonStyle, ...styles.loadingStyle }} style={{ ...styles.buttonStyle }}>
          <Text style={{ fontFamily: lato.bold.default, color: rejectLoading ? whiteColor.opacity700 : whiteColor.default }}>
            Reject
          </Text>
        </Button>

        <TouchableOpacity onPress={() => {
            var data = { id, status: "unaccepted" };
            setPassengerSelected(data);
          }} style={{ ...styles.buttonStyle, backgroundColor: primaryColor.default }}>
          <Text style={{ fontFamily: lato.bold.default, color: rejectLoading ? whiteColor.opacity700 : whiteColor.default }}>
            View
          </Text>
        </TouchableOpacity>
      </View>
    </View>;
}

export default PassengerCard

const styles = StyleSheet.create({
  locationStyle: {
    fontFamily: lato.regular.default
  },
  buttonStyle: {
    flex: 1 / 2,
    width: "auto",
    backgroundColor: dangerColor.opacity800,
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  loadingStyle: {
    backgroundColor: dangerColor.opacity500
  }
});