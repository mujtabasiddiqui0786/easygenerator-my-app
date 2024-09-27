// src/utils/auth.ts
import jwtDecode from 'jwt-decode';

interface JwtPayload {
  exp: number;
  [key: string]: any;
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: JwtPayload = jwtDecode(token);
    const currentTime = Date.now() / 1000; // in seconds
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};
