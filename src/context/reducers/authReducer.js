import { CLEAR_USER_DATA, ERROR_CATCHER, SET_USER_DATA } from "../types";
import { authAPI, errorHandler } from "../../api";
import { Redirect } from "react-router-dom";

const initialState = {
  username: null,
  password: null,
  isAuth: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case ERROR_CATCHER:
      return {
        ...state,
        error: action.error,
      };

    case CLEAR_USER_DATA:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};

export const setAuth = (username, password, isAuth) => ({
  type: SET_USER_DATA,
  payload: { username, password, isAuth },
});

export const clearUserData = () => ({
  type: CLEAR_USER_DATA,
  isAuth: false,
});

export const errorCatcher = (error) => ({ type: ERROR_CATCHER, error });
export const logout = () => {
  localStorage.clear()
}

export const login = (username, password, isAuth) => async (dispatch) => {
  try {
    let response = await authAPI.login(username, password, isAuth);
    localStorage.access ? dispatch(setAuth(username, password, true)) : 
      dispatch(errorCatcher(response));
      await errorHandler(response?.data);
    console.log(isAuth);
  } catch (e) {
    console.log("ERROR: !!!", e);
    if (e?.status === 401) throw console.log("ERROR: !!!", e.status);
  }
};

// Test_ultra_task / T54321oikb
