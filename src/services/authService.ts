import { baseUrl } from "../constants";
import { User } from "../components/interfaces";

const register = async (data: User) => {
    const response = await fetch(`${baseUrl}/auth/register/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData);
    }

    return responseData;
}

const login = async (data: User) => {
    const response = await fetch(`${baseUrl}/auth/login/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData);
    }

    return responseData;
}

export const authService = { register, login };