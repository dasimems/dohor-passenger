import React, { createContext, useContext, useReducer } from 'react'
import { actionInitialValue, actionReducer } from '../reducer'

const ActionContext = createContext(actionInitialValue)

export const ActionProvider = ({children}) => {

    const [state, dispatch] = useReducer(actionReducer, actionInitialValue);

    

  return <ActionContext.Provider value={{ ...state }}>
      {children}
    </ActionContext.Provider>;
}

const useActionContext = () => {
    return useContext(ActionContext)
}

export default useActionContext;