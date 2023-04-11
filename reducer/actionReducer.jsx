import { CLOSE_CAMERA, CLOSE_MODAL, OPEN_CAMERA, OPEN_MODAL, RESET_ACTION_CONTEXT, SET_MODAL_CONTENT, SET_MODAL_HEIGHT, SET_MODAL_STYLES } from "../data/_actions";

export const initialValue = {
    modalOpened: false,
    modalContent: null,
    modalHeight: "50%",
    modalStyle: null,
    cameraOpened: false,
    imagSelected: ""
}

export const reducer= (state, action) =>{
    const {type, payload} = action;
    
    switch (type) {
      case OPEN_MODAL:
        return { ...state, modalOpened: true, modalContent: payload, modalHeight: "50%" };

      case CLOSE_MODAL:
        return { ...state, modalOpened: false, modalContent: null, modalHeight: "50%" };

      case SET_MODAL_STYLES:
        return { ...state, modalStyle: payload };

      case SET_MODAL_CONTENT:
        return { ...state, modalContent: payload };

      case OPEN_CAMERA:
        return { ...state, cameraOpened: true };

      case CLOSE_CAMERA:
        return { ...state, cameraOpened: false };

      case SET_MODAL_HEIGHT:
        return { ...state, modalHeight: payload };

      case RESET_ACTION_CONTEXT:
        return initialValue;

      default:
        return state;
    }
}