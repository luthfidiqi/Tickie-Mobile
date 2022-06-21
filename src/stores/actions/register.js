import axios from "../../utils/axios";

export const signUp = (data) => {
  return {
    type: "POST_REGISTER",
    payload: axios.post(`auth/register`, data),
  };
};
