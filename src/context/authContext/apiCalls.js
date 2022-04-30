import { loginFailure, loginSuccess, loginStart } from "./AuthActions";
import { api } from "../../services/api";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await api.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
