import { RESET_NAVIGATION_CONTEXT } from "../data/_actions";

export const initialValue = {
  from: null,
  to: null
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESET_NAVIGATION_CONTEXT:
      return initialValue;

    default:
      return state;
  }
};
