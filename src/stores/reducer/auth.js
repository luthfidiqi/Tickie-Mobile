const initialState = {
  data: [],
  userData: {},
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

    case 'GET_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
        userData: {},
      };
    }
    case 'GET_USER_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.message,
        userData: action.payload.data.data[0],
        userSetData: action.payload.data.data[0],
      };
    }
    case 'GET_USER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.message,
        userData: {},
      };
    }

    default:
      return state;
  }
};

export default auth;
