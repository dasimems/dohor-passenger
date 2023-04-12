import React, { createContext, useContext, useReducer } from "react";
import { userInitialValue, userReducer } from "../reducer";
import { CLOSED_WORK, OPEN_TO_WORK } from "../data/_actions";

const UserContext = createContext(userInitialValue);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, userInitialValue);

  const openToWork= () => {

    dispatch({
      type: OPEN_TO_WORK
    })

  }

  const closedWork = () => {

    dispatch({
      type: CLOSED_WORK
    })

  }

  return <UserContext.Provider value={{ ...state, openToWork, closedWork }}>
      {children}
    </UserContext.Provider>;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export default useUserContext;
