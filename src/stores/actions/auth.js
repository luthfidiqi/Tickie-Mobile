import axios from '../../utils/axios';

export const register = data => {
  return {
    type: 'REGISTER',
    payload: axios.post('auth/register', data),
  };
};

export const getUser = (data) => {
  return {
    type: "GET_USER",
    payload: axios.get(`user/${data}`)
  };
};
