import React, { createContext, useContext, useReducer } from "react";
import { formInitialValue, formReducer } from "../reducer";

const FormContext = createContext(formInitialValue);

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, formInitialValue);

  return (
    <FormContext.Provider value={{ ...state }}>
      {children}
    </FormContext.Provider>
  );
};

const useFormContext = () => {
  return useContext(FormContext);
};

export default useFormContext;
