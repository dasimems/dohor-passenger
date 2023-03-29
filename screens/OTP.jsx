import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, FormInputField, Logo } from "../components";
import { blackColor, dangerColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { AngleLeft } from "../assets/icons";
import AnimatedLottieView from "lottie-react-native";
import { mailLottieFile } from "../assets/lotties";
import { useFormContext } from "../context";
import {
  OTP_CODE_FOUR,
  OTP_CODE_ONE,
  OTP_CODE_THREE,
  OTP_CODE_TWO
} from "../data/_actions";
import { formatSeconds } from "../functions";

const OTP = () => {
  const { navigate, goBack } = useNavigation();
  const {
    phone,
    otpCodeOne,
    otpCodeTwo,
    otpCodeThree,
    otpCodeFour,
    setOTPCode,
    country: { mobileCode }
  } = useFormContext();
  const [defaultTimer, setDefaultTimer] = useState(30000);
  const [error, setError] = useState(false)
  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);
  const inputRefThree = useRef(null);
  const inputRefFour = useRef(null);

  const processOtp = useCallback(()=>{

    var allCode = `${otpCodeOne}${otpCodeTwo}${otpCodeThree}${otpCodeFour}`;


    if(allCode === "5555"){

    }else{

        setError(true);
            var positionArr = [OTP_CODE_ONE, OTP_CODE_TWO, OTP_CODE_THREE, OTP_CODE_FOUR];

            positionArr.forEach((_, index) => {
                setOTPCode("", positionArr[index]);
            });
            inputRefOne.current.focus();


    }

  }, [otpCodeOne, otpCodeTwo, otpCodeThree, otpCodeFour])

  useEffect(
    () => {
      setTimeout(() => {
        if (defaultTimer > 0) {
          var newTimer = defaultTimer - 1000;

          if (newTimer < 0) {
            newTimer = 0;
          }

          setDefaultTimer(newTimer);
        }
      }, 1000);
    },
    [defaultTimer]
  );

  useEffect(() => {
    if(otpCodeOne.trim() !== "" && otpCodeTwo.trim() !== "" && otpCodeThree.trim() !== "" && otpCodeFour.trim() !== ""){

        processOtp();

    }
    // setError(false)
  }, [otpCodeOne, otpCodeTwo, otpCodeThree, otpCodeFour, processOtp]);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: whiteColor.default }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
        >
          <AngleLeft />
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "space-between",
            gap: 30
          }}
        >
          <AnimatedLottieView
            source={mailLottieFile}
            autoPlay
            loop={false}
            style={{ maxWidth: 100, width: "100%", maxHeight: 100 }}
          />

          <View style={{ gap: 6 }}>
            <Text
              style={{
                fontFamily: lato.bold.default,
                fontSize: 20,
                textAlign: "center"
              }}
            >
              Verification
            </Text>

            <Text style={{ ...styles.textStyle }}>
              Enter verification code that sent to
            </Text>
            <Text style={{ ...styles.textStyle }}>
              {" "}<Text style={{ fontFamily: lato.bold.default }}>
                +{mobileCode} {phone}
              </Text>{" "}
              by SMS
            </Text>
          </View>

          <View>

            <View style={{ flexDirection: "row", gap: 20 }}>
                <FormInputField
                disableKeyboardAutoHide
                ref={inputRefOne}
                value={otpCodeOne}
                onChangeText={text => {
                    var value = text.trim();

                    if (value.length < 5) {
                        var positionArr = [
                            OTP_CODE_ONE,
                            OTP_CODE_TWO,
                            OTP_CODE_THREE,
                            OTP_CODE_FOUR
                            ],
                            codeArr = value.split("");

                        codeArr.forEach((code, index) => {
                            if (index > 0) {
                            setOTPCode(code, positionArr[index]);
                            }
                        });
                    }

                    if (value.length > 1) {
                    value = value.slice(0, 1);
                    }

                    setOTPCode(value, OTP_CODE_ONE);

                    if (value.length > 0) {
                    inputRefTwo.current.focus();
                    }
                }}
                keyboardType="number-pad"
                inputType="numeric"
                inputStyle={{ ...styles.inputFieldStyle,
                }}
                style={{ ...styles.inputStyle,
                
                    borderWidth: error? 1: 0,
                    borderColor: error? dangerColor.opacity600: "transparent" }}
                removePlaceholder
                />
                <FormInputField
                    onKeyPress={({ nativeEvent: { key: keyValue } }) => {

                        if(otpCodeTwo.trim() === ""){

                            if(keyValue.toLowerCase() === "backspace"){
                                inputRefOne.current.focus()
                            }

                        }
                    }}
                disableKeyboardAutoHide
                ref={inputRefTwo}
                value={otpCodeTwo}
                onChangeText={text => {
                    var value = text.trim();
                    if (value.length > 1) {
                    value = value.slice(0, 1);
                    }

                    setOTPCode(value, OTP_CODE_TWO);

                    if (value.length > 0) {
                    inputRefThree.current.focus();
                    }
                }}
                keyboardType="number-pad"
                inputType="numeric"
                inputStyle={{ ...styles.inputFieldStyle,
                }}
                style={{ ...styles.inputStyle,
                
                    borderWidth: error? 1: 0,
                    borderColor: error? dangerColor.opacity600: "transparent" }}
                removePlaceholder
                />
                <FormInputField
                    onKeyPress={({ nativeEvent: { key: keyValue } }) => {

                        if(otpCodeThree.trim() === ""){

                            if(keyValue.toLowerCase() === "backspace"){
                                inputRefTwo.current.focus()
                            }

                        }
                    }}
                disableKeyboardAutoHide
                ref={inputRefThree}
                value={otpCodeThree}
                onChangeText={text => {
                    var value = text.trim();
                    if (value.length > 1) {
                    value = value.slice(0, 1);
                    }

                    setOTPCode(value, OTP_CODE_THREE);

                    if (value.length > 0) {
                    inputRefFour.current.focus();
                    }
                }}
                keyboardType="number-pad"
                inputType="numeric"
                inputStyle={{ ...styles.inputFieldStyle,
                }}
                style={{ ...styles.inputStyle,
                
                    borderWidth: error? 1: 0,
                    borderColor: error? dangerColor.opacity600: "transparent" }}
                removePlaceholder
                />
                <FormInputField
                onKeyPress={({ nativeEvent: { key: keyValue } }) => {

                    if(otpCodeFour.trim() === ""){

                        if(keyValue.toLowerCase() === "backspace"){
                            inputRefThree.current.focus()
                        }

                    }
                }}
                ref={inputRefFour}
                value={otpCodeFour}
                onChangeText={text => {
                    var value = text.trim();
                    if (value.length > 1) {
                    value = value.slice(0, 1);
                    }

                    setOTPCode(value, OTP_CODE_FOUR);
                }}
                keyboardType="number-pad"
                inputType="numeric"
                inputStyle={{ ...styles.inputFieldStyle,
                }}
                style={{ ...styles.inputStyle,
                
                    borderWidth: error? 1: 0,
                    borderColor: error? dangerColor.opacity600: "transparent" }}
                removePlaceholder
                />
            </View>

            <Text style={{
                textAlign: "center",
                fontFamily: lato.regular.default,
                marginTop: 5,
                color: error? dangerColor.opacity500 : blackColor.opacity500
            }}>{error? "Invalid Code" : "Enter 4 digit code"}</Text>

          </View>

        </ScrollView>
      </View>

      <View>
        {defaultTimer < 1
          ? <TouchableOpacity
              onPress={() => {
                setDefaultTimer(100000);
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: lato.bold.default,
                  color: primaryColor.opacity700,
                  fontSize: 17
                }}
              >
                Resend Code
              </Text>
            </TouchableOpacity>
          : <Text
              style={{
                textAlign: "center",
                fontFamily: lato.regular.default,
                color: blackColor.opacity700
              }}
            >
              Resend Code in ({formatSeconds(defaultTimer)})
            </Text>}
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontFamily: lato.regular.default,
    color: blackColor.opacity600,
    fontSize: 17
  },

  inputStyle: {
    width: 50,
    backgroundColor: "rgba(0, 0, 0, .04)",
    borderRadius: 10
  },

  inputFieldStyle: {
    textAlign: "center",
    borderWidth: 0
  }
});
