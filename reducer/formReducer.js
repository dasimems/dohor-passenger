import { RESET_FORM_CONTEXT } from "../data/_actions";

export const initialValue = {
  otpToken: null,
  otpCodeOne: "",
  otpCodeTwo: "",
  otpCodeThree: "",
  otpCodeFour: "",
  phone: "",
  country: {
    flag: "",
    mobileCode: "1",
    name: "United State",
    countryCode: "US"
  }
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESET_FORM_CONTEXT:
      return initialValue;

    default:
      return state;
  }
};
