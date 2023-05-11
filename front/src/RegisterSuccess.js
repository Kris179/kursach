import React from 'react'
import '../src/styles/globalStyles.css'
import {useNavigate} from "react-router-dom";

const RegisterSuccess = () => {
    const navigate = useNavigate()
    return (
        <div className={'activation_success'}>
            <h2>Ваш аккаунт успешно активирован!</h2>
            <p>Спасибо за активацию Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur eveniet id ipsa, neque nisi odio omnis ratione voluptas voluptatem! A assumenda eligendi error ipsum quam sit vel veritatis. Atque?</p>
            <button onClick={() => navigate('/')}>Вернуться на главную страницу</button>
        </div>
    )
}

export default RegisterSuccess