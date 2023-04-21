import { RESET_NAVIGATION_CONTEXT, SET_FROM, SET_TO, SET_USER_LIST, SET_USER_SELECTED } from "../data/_actions";

export const initialValue = {
  from: null,
  to: null,
  activePassenger: null,
  passengers: []

};

export const passengerData = {
  id: null,
  status: "viewing"
}

export const reducer = (state, action) => {
  var { type, payload } = action;

  switch (type) {

    case SET_USER_LIST:

      if(!payload) payload = [];
      return {...state, passengers: payload}

    case SET_TO:
      return {...state, to: payload}

    case SET_FROM:
      return {...state, from: payload}

    case SET_USER_SELECTED:
      return {...state, activePassenger: payload};
    case RESET_NAVIGATION_CONTEXT:
      return initialValue;

    default:
      return state;
  }
};
