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
      "https://note-backend-taupe.vercel.app/user/login",
      obj
    );

    let { message, token, status, user } = response.data;

    if (status == 1) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
      localStorage.setItem("id", user._id);
    } else {
      dispatch({ type: LOGIN_USER_ERROR });
    }
  } catch (error) {
    dispatch({ type: LOGIN_USER_ERROR });
  }
};
