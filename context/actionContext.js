import React, { createContext, useContext, useReducer } from 'react'
import { actionInitialValue, actionReducer } from '../reducer'
import LottieView from "lottie-react-native";
import { SomethingWentWrongLottieFile } from '../assets/lotties';
import { lato } from '../fonts';
import { padding } from '../data/general';
import { CLOSE_CAMERA, CLOSE_MODAL, OPEN_CAMERA, OPEN_MODAL, SET_IMAGE_SELECTED, SET_MODAL_CONTENT, SET_MODAL_HEIGHT, SET_MODAL_STYLES } from '../data/_actions';
import { Text, View } from 'react-native';

const ActionContext = createContext(actionInitialValue)

export const ActionProvider = ({children}) => {

    const [state, dispatch] = useReducer(actionReducer, actionInitialValue);

     const openModal = data => {
       var { content, height, styles } = data || {};

       if (!content) {
         content = <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", padding }}>
             <LottieView autoPlay style={{ width: 100, height: 100 }} source={SomethingWentWrongLottieFile} />

             <Text style={{ marginTop: 10, fontFamily: lato.regular.default }}>
               Something Went Wrong
             </Text>
           </View>;
       }

       dispatch({ type: OPEN_MODAL, payload: content });

       if (height) {
         dispatch({ type: SET_MODAL_HEIGHT, payload: height });
       }

       if (styles) {
         dispatch({ type: SET_MODAL_STYLES, payload: styles });
       }
     };

     
    const closeModal = () => {
      dispatch({ type: CLOSE_MODAL });
    };

    const setModalContent = (payload) => {

        if(payload){

            dispatch({
            type: SET_MODAL_CONTENT,
            payload
        })

        }

    }

    const setModalHeight = height => {
      if (height) {
        dispatch({ type: SET_MODAL_HEIGHT, payload: height });
      }
    };


    const openCamera = () => {

      dispatch({
        type: OPEN_CAMERA
      })

    }

    const closeCamera = () => {
      dispatch({ type: CLOSE_CAMERA });
    };

    const setImage = (payload) => {
      dispatch({
        type: SET_IMAGE_SELECTED,
        payload
      })
    }

    const SetModalStyle= (payload) =>{

      if(payload){
        dispatch({
          type: SET_MODAL_STYLES,
          payload
        })
      }

    }

  return <ActionContext.Provider value={{ ...state, openModal, closeModal, setModalContent, setModalHeight, SetModalStyle, openCamera, closeCamera }}>
      {children}
    </ActionContext.Provider>;
}

const useActionContext = () => {
    return useContext(ActionContext)
}

export default useActionContext;