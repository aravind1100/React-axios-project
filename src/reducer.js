export const initialState = {
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_NESTED_FIELD":
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          [action.subField]: action.value,
        },
      };
    case "SET_DEEP_NESTED_FIELD":
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          [action.subField]: {
            ...state[action.field][action.subField],
            [action.deepField]: action.value,
          },
        },
      };
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
