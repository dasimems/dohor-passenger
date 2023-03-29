import { RESET_USER_CONTEXT } from "../data/_actions";

export const initialValue = {
  userDetails: null
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESET_USER_CONTEXT:
      return initialValue;

    default:
      return state;
  }
};
