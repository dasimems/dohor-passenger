import { CLOSED_WORK, OPEN_TO_WORK, RESET_USER_CONTEXT } from "../data/_actions";

export const initialValue = {
  userDetails: null,
  tokenAvailable: false,
  online: false
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case OPEN_TO_WORK:
      return { ...state, online: true };

    case CLOSED_WORK:
      return { ...state, online: false };

    case RESET_USER_CONTEXT:
      return initialValue;

    default:
      return state;
  }
};
