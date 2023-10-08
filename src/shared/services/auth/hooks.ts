import {useMutation} from '@apollo/client';
import {getToken, isExpiredToken, resetToken, setToken} from "./utils";
import { LOGIN_MUTATION} from "../../api/graphql";
import {useClearUser} from "../../../features/user/hooks";
import {useClearDashboard} from "../../../features/dashboard/hooks";
import { useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LoginResult} from "./model";
import {updateUser} from "../../../features/user/slice";
import {User} from "../../../features/user/model";

export const useLogin = () => {
  const [login, { data }] = useMutation(LOGIN_MUTATION);
  const dispatch = useDispatch()
  const handleLogin = async (user: string, password: string): Promise<LoginResult> => {
    try {
      if (user.length < 3 || password.length < 3) {
        return Promise.resolve({ success: false, error: `Username and password can't be empty`})
      }
      const response = await login({
        variables: { username: user, password },
      });
      const { data } = response;
      const { token, username } = data.login;
      setToken(token)
      dispatch(updateUser({username} as User))
      return { success: true, error: null};
      // @ts-ignore
    } catch (error: Error) {
      return { success: false, error: error.message };
    }
  };

  return {
    data,
    handleLogin,
  }
}

export const useLogout = () => {
  const navigate = useNavigate();
  const logout = useClearUser();
  const clearDashboard = useClearDashboard();
  return () => {
    clearDashboard();
    resetToken();
    logout();
    navigate('/login');
  }
}
export const useAuth = () => {
  const token = getToken()
  if (!token) {
    return true;
  }
  return isExpiredToken(token);
}