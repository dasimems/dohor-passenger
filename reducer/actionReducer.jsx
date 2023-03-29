import { RESET_ACTION_CONTEXT } from "../data/_actions";

export const initialValue = {
    modalOpened: false,
    modalContent: null,
    modalHeight: "50%"
}

export const reducer= (state, action) =>{
    const {type, payload} = action;
    
    switch(type){

        case RESET_ACTION_CONTEXT:
            return initialValue;

        default: 
            return state;
    }
}