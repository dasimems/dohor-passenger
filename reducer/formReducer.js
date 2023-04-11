import { OTP_CODE_FOUR, OTP_CODE_ONE, OTP_CODE_THREE, OTP_CODE_TWO, RESET_FORM_CONTEXT, SET_COUNTRY, SET_OTP_CODE, SET_OTP_TOKEN, SET_PHONE_NUMBER } from "../data/_actions";

export const initialValue = {
  otpToken: null,
  otpCodeOne: "",
  otpCodeTwo: "",
  otpCodeThree: "",
  otpCodeFour: "",
  phone: "",
  country: {
    flag: "https://flagcdn.com/w320/us.png",
    mobileCode: "1",
    name: "United State",
    countryCode: "US"
  }
};

export const reducer = (state, action) => {
  const { type, payload, position } = action;

  switch (type) {
    case SET_PHONE_NUMBER:
      return { ...state, phone: payload };

    case SET_OTP_TOKEN:
      return { ...state, otpToken: payload };

    case SET_COUNTRY:
      return { ...state, country: payload };

    case SET_OTP_CODE:

        if (position === OTP_CODE_ONE) {
          return { ...state, otpCodeOne: payload };
        }else if (position === OTP_CODE_TWO) {
          return { ...state, otpCodeTwo: payload };
        }else if (position === OTP_CODE_THREE) {
          return { ...state, otpCodeThree: payload };
        }else if (position === OTP_CODE_FOUR) {
          return { ...state, otpCodeFour: payload };
        } else {
          return state;
        }
      

    case RESET_FORM_CONTEXT:
      return initialValue;

    default:
      return state;
  }
};
