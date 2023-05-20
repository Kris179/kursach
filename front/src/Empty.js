import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import AuthService from "./services/AuthService";
import React from "react";
import {loginUser, setAuth} from "./actions/actions";
import {useDispatch} from "react-redux";

const Empty = () => {
    const {id} = useParams()
    const {loginVK} = AuthService()
    const dispatch = useDispatch()
    const [error, setError] = useState('');


    useEffect(async () => {
        try {
            const response = await loginVK({id}).then((response) =>
            {
                localStorage.setItem('token', `${response.data.accessToken}`)
                dispatch(loginUser(response.user))
                dispatch(setAuth(true))
                console.log(response)
                window.location.href ='/'
                })
        } catch (e) {
            setError(e)
        }
    }, [id])
    return(
        <p>олпдсжчваелрп</p>
    )
}
export default Empty;