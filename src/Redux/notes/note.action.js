import {
  CREATE_NOTES_ERROR,
  CREATE_NOTES_LOADING,
  CREATE_NOTES_SUCCESS,
  DELETE_NOTES_ERROR,
  DELETE_NOTES_LOADING,
  DELETE_NOTES_SUCCESS,
  GET_NOTES_ERROR,
  GET_NOTES_LOADING,
  GET_NOTES_SUCCESS,
  UPDATE_NOTES_ERROR,
  UPDATE_NOTES_LOADING,
  UPDATE_NOTES_SUCCESS,
} from "./note.types";
import axios from "axios";
import { LOGOUT } from "../user/user.types";

const selectToken = (state) => state.userReducer.token;

export const getNotes = () => async (dispatch, getState) => {
  const token = selectToken(getState());
  console.log("token noteaction:", token);

  dispatch({ type: GET_NOTES_LOADING });
  try {
    const res = await axios(
      "https://note-takking-app-backend-main.vercel.app",
      {
        method: "get",
        headers: {
          Authorization: token,
        },
      }
    );

    const { status, message, data } = res.data;
    console.log(message);
    if (status === 1) {
      dispatch({ type: GET_NOTES_SUCCESS, payload: data });
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: GET_NOTES_ERROR });
    }
  } catch (error) {
    dispatch({ type: GET_NOTES_ERROR });
  }
};

export const createNotes = (obj) => async (dispatch, getState) => {
  const token = selectToken(getState());
  dispatch({ type: CREATE_NOTES_LOADING });
  try {
    const res = await axios(
      "https://note-takking-app-backend-main.vercel.app/note/create",
      {
        method: "post",
        data: obj,
        headers: {
          Authorization: token,
        },
      }
    );

    const { status, message } = res.data;
    console.log(message);
    if (status === 1) {
      dispatch({ type: CREATE_NOTES_SUCCESS });
      dispatch(getNotes());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: CREATE_NOTES_ERROR });
    }
  } catch (error) {
    dispatch({ type: CREATE_NOTES_ERROR });
  }
};

export const deleteNotes = (id) => async (dispatch, getState) => {
  const token = selectToken(getState());
  console.log("testing id:", id);

  dispatch({ type: DELETE_NOTES_LOADING });
  try {
    const res = await axios(
      `https://note-takking-app-backend-main.vercel.app/note/delete/${id}`,
      {
        method: "delete",
        headers: {
          Authorization: token,
        },
        data: {
          id: id,
        },
      }
    );

    const { status, message } = res.data;
    console.log(message);
    if (status === 1) {
      dispatch({ type: DELETE_NOTES_SUCCESS });
      dispatch(getNotes());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: DELETE_NOTES_ERROR });
    }
  } catch (error) {
    dispatch({ type: DELETE_NOTES_ERROR });
  }
};

export const updateNotes = (id, obj) => async (dispatch, getState) => {
  const token = selectToken(getState());

  dispatch({ type: UPDATE_NOTES_LOADING });
  try {
    const res = await axios(
      `https://note-takking-app-backend-main.vercel.app/note/update/${id}`,
      {
        method: "patch",
        data: {
          ...obj,
          id: id,
        },
        headers: {
          Authorization: token,
        },
      }
    );

    const { status, message } = res.data;
    console.log(message);
    if (status === 1) {
      dispatch({ type: UPDATE_NOTES_SUCCESS });
      dispatch(getNotes());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: UPDATE_NOTES_ERROR });
    }
  } catch (error) {
    dispatch({ type: UPDATE_NOTES_ERROR });
  }
};
