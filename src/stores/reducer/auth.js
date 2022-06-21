const initialState = {
  data: [],
  isError: false,
  isLoading: false,
  msg: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING': {
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data.newResult,
        msg: action.payload.data.message,
      };
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        msg: action.payload.response.data.msg,
      };
    }
    default:
      return state;
  }
};

export default auth;
