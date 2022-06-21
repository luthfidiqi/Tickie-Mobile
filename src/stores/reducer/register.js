const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  msg: "",
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case "POST_REGISTER_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "POST_REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data.newResult,
        msg: action.payload.data.msg,
      };

    case "POST_REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: action.payload.response.data.data,
        msg: action.payload.response.data.msg,
      };

    default:
      return state;
  }
};

export default signup;
