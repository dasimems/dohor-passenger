import React, { createContext, useContext, useReducer } from "react";
import { formInitialValue, formReducer } from "../reducer";
import { SET_COUNTRY, SET_OTP_CODE, SET_OTP_TOKEN, SET_PHONE_NUMBER } from "../data/_actions";

const FormContext = createContext(formInitialValue);

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, formInitialValue);

  const setPhoneNumber = (payload) => {
    dispatch({
        type: SET_PHONE_NUMBER,
        payload
    })
  }

  const setCountry = (payload) => {
    dispatch({
        type: SET_COUNTRY,
        payload
    })
  }

  const setOTPToken = payload => {
    dispatch({ 
        type: SET_OTP_TOKEN,
        payload 
    });
  };

  const setOTPCode = (payload, position) => {
    dispatch({
        type: SET_OTP_CODE,
        payload,
        position
    })
  }

  return <FormContext.Provider value={{ ...state, setPhoneNumber, setCountry, setOTPCode, setOTPToken }}>
      {children}
    </FormContext.Provider>;
};

const useFormContext = () => {
  return useContext(FormContext);
};

export default useFormContext;
