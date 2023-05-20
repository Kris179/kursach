import $api from "../http";
import React from 'react';

const AuthService = () => {
    const login = async (email, password) => {
        return $api.post('/login', {email, password})
    }
    const loginVK=(id)=> {
        console.log(id)
        return $api
            .get(`http://localhost:8083/users/${id.id}`) //здесь метод получения пользователя по id
    }
    const registration = async (
        login,
        password,
        fio,
        email
) => {
        return $api.post('/registration', {login, password, fio, email})
    }

    const logout = async () => {
        return $api.post('/logout')
    }

     const setPassword = async (id, password) => {
        return $api.post(`/set-password/${id}`, {password})
     }



    return {login, registration, logout, setPassword, loginVK}
}

export default AuthService
