import React from 'react';
import '../styles/globalStyles.css'
import axios from "axios";
import { useState, useEffect } from "react";
import {useSelector} from "react-redux";
import Alert from "./Alert";
import {useNavigate} from "react-router-dom";


const CatalogCards = ({type}) => {
    const {isAuth, curUser} = useSelector((state) => state)
    const [us, setUs] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    useEffect( () => {
      axios.get('http://localhost:8083/api/products').then((response) => {
            if (type === 'min'){
                setUs(response.data.slice(0,4))
            } else {
                setUs(response.data)
            }
        });
    }, []);


    const handleBuyClick = (productId) => {
        // Обработчик событий для кнопки "Купить"
        console.log(`Товар с ID ${productId} добавлен в корзину`);
    };

    const showAlert = () => {
        clearTimeout()
        setIsOpen(true)
        setTimeout(() => {
            setIsOpen(false)
        }, 2000)
    }

    return (
        <>
            <Alert isOpen={isOpen} title={'Ошибка!'} description={'Активируйте аккаунт'}/>
        <div>
            <div className="catalogue">
                {us.map(({ProductID, Name, Price, PhotoID }) => (
                    <div key={ProductID} className="product-card">
                        <img src={`http://localhost:8083/photo/${PhotoID}`} alt={Name} />
                        <div className="product-info">
                            <h4>{Name}</h4>
                            <p>{Price} ₽</p>
                        </div>
                        {isAuth ? <button onClick={() => curUser.Activation ? navigate(`/products/${ProductID}`) : showAlert()} className={'pay'}>Купить</button> : null}
                    </div>

                ))}
            </div>
        </div>
        </>
    );
};

export default CatalogCards;
