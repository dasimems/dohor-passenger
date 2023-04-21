import React, { createContext, useCallback, useContext, useEffect, useReducer, useState } from "react";
import { navigationInitialValue, navigationReducer } from "../reducer";
import { SET_FROM, SET_TO, SET_USER_LIST, SET_USER_SELECTED } from "../data/_actions";
import * as Location from "expo-location";

const NavigationContext = createContext({
  ...navigationInitialValue,
  setUserList: () =>{},
  setTo: () => {},
  setFrom: () => {},
  fetchLocation: () => {},
  setPassengerSelected: () => {},

});

export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navigationReducer, navigationInitialValue);


  const setPassengerSelected = useCallback((payload) =>{

    dispatch({
      type: SET_USER_SELECTED,
      payload
    })

  }, [])

  const setTo = (payload) => {
    if(payload && typeof(payload) === "object"){

      dispatch({
        type: SET_TO,
        payload
      })

    }
  }

  const setFrom = (payload) => {
    if(payload && typeof(payload) === "object"){

      dispatch({
        type: SET_FROM,
        payload
      })

    }
  }

  const setUserList = useCallback((payload) => {

    dispatch({
      type: SET_USER_LIST,
      payload
    })
    
  }, [])

  
  const fetchLocation = useCallback(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setFrom(location?.coords)
    // console.log(location?.coords)
  }, []);

  useEffect(()=>{
    fetchLocation()
  }, [])

  return <NavigationContext.Provider value={{ ...state, setPassengerSelected, setUserList, setTo, setFrom, fetchLocation }}>
      {children}
    </NavigationContext.Provider>;
};

const useNavigationContext = () => {
  return useContext(NavigationContext);
};

export default useNavigationContext;
