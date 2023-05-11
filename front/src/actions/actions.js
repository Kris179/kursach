import axios from "axios";
import AuthService from "../services/AuthService";
import {API_URL} from "../http";

export const loginUser = (user) => {
    return {
        type: 'USER_FETCHED',
        payload: user
    }
}

export const setAuth = (bool) => {
    return {
        type: 'SET_AUTH',
        payload: bool
    }
}

export const logout = async () => {
    try {
        const {logout} = AuthService()
        await logout()
        localStorage.removeItem('token')
    } catch (e) {

    }
}

export const checkAuth = async () => {
    try {
        const response = await axios.get(`${API_URL}refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken)
        return response
    } catch (e) {

    }
}