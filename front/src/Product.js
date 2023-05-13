import React, {useEffect, useState} from 'react';
import photo1 from "./img/Мишка.png";
import {useParams} from "react-router-dom";
import ProductService from "./services/ProductService";

function ProductPage() {
    const [product, setProduct] = useState({})
    const {takeProductByID} = ProductService()
    const {id} = useParams()

    useEffect(() => {
        takeProductByID(id).then((data) => setProduct(data.data[0]))
    }, [])

    console.log(product)

    return (
        <div className="product-page">
            <div className="product_cont">
            <div className="product_info">
                <h1 className="product-name">{product.Name}</h1>
                <p className="product-price">{product.Price} ₽</p>
                <button className="buy-button">Купить</button>
            </div>
                <div className="product-image">
                    <img src={photo1} alt="Moschino TOY 2 BUBBLE GUM" />
                </div>
                <div className="product-sidebar">
                    <h2>Сделай правильный выбор</h2>
                    <p>{product.title}</p>
                </div>
            </div>
            <div className="product-description">
                <h2>Описание</h2>
                <div className="description_border"></div>
                <p>{product.description}</p>
            </div>
            <div className="product-footer">
                <p>Здесь будет футер страницы.</p>
            </div>
        </div>
    );
}

export default ProductPage;
