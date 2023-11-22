import axios from "axios";
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
} from "./user.types";

export const getUser = (obj) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_LOADING });

  try {
    let response = await axios.post(
      "https://note-takking-app-backend-main.vercel.app/user/login",
      obj
    );
    console.log(response);
    let { message, token, status } = response.data;

    if (status == 1) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
    } else {
      dispatch({ type: LOGIN_USER_ERROR });
    }
  } catch (error) {
    dispatch({ type: LOGIN_USER_ERROR });
  }
};
