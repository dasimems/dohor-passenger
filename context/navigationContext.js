import React, { createContext, useContext, useReducer } from "react";
import { navigationInitialValue, navigationReducer } from "../reducer";

const NavigationContext = createContext(navigationInitialValue);

export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navigationReducer, navigationInitialValue);

  return (
    <NavigationContext.Provider value={{ ...state }}>
      {children}
    </NavigationContext.Provider>
  );
};

const useNavigationContext = () => {
  return useContext(NavigationContext);
};

export default useNavigationContext;
