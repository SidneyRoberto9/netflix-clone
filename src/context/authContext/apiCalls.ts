import { loginFailure, loginSuccess, loginStart } from "./AuthActions";
import { api } from "../../services/api";
import { UserLogin } from "../../models/user.model";

export const login = async (
  user: UserLogin,
  dispatch: {
    (value: any): void;
    (arg0: { type: string; payload?: UserLogin }): void;
  }
) => {
  dispatch(loginStart());
  try {
    const res = await api.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
