import { Dispatch } from "redux";
import { login as loginApi, verifyToken } from "@/services/authService";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const login: any =
  (username: string, password: string) => async (dispatch: Dispatch) => {
    const token = await loginApi(username, password);
    if (token) {
      localStorage.setItem("heroMoviesToken", token as any);
      dispatch({ type: LOGIN_SUCCESS });
    }
  };

export const logout = () => (dispatch: Dispatch) => {
  localStorage.removeItem("heroMoviesToken");
  dispatch({ type: LOGOUT });
};

export const authenticateWithToken = () => async (dispatch: Dispatch) => {
  const token = localStorage.getItem("heroMoviesToken");
  if (token) {
    try {
      await verifyToken(token);
      dispatch({ type: LOGIN_SUCCESS });
    } catch (error) {
      localStorage.removeItem("heroMoviesToken");
      dispatch({ type: LOGOUT });
    }
  } else {
    dispatch({ type: LOGOUT });
  }
};
