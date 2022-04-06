import { baseUrl } from "../constants";
import { User } from "../components/interfaces";

import { requester } from '../requester';

const register = async (data: User) => {
    const result = await requester.post(`${baseUrl}/auth/register/`, data);

    localStorage.setItem('user', JSON.stringify({ user_id: result.user_id, token: result.token }));
    return result;
}

const login = async (data: User) => {
    const result = await requester.post(`${baseUrl}/auth/login/`, data);

    localStorage.setItem('user', JSON.stringify({ token: result.token }));
    return result;
}

const logout = async (token: string) => {
    const result = await requester.post(`${baseUrl}/auth/logout/`, null, token);

    localStorage.removeItem('user');
    return result;
}

export const authService = { register, login, logout };