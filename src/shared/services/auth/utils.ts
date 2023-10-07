import {jwtDecode, JwtPayload} from "jwt-decode";

const TOKEN_KEY = 'accessToken'

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const resetToken = () => {
  localStorage.setItem(TOKEN_KEY, '')
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY) ?? ''
}

export const isExpiredToken = (token: string): boolean => {
  if (!token) {
    return true;
  }
  const decodedToken = jwtDecode<JwtPayload>(token);
  let result: boolean = true;
  if (decodedToken && decodedToken.exp) {
    const expirationDate: Date = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp);
    result = expirationDate.valueOf() < new Date().valueOf();
  }
  return result;
}

