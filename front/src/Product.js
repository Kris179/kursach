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
                {/* <h1 className="product-name">{product.Name}</h1>
                <p className="product-price">{product.Price} ₽</p> */}
                <h1 className="product-name">Moschino TOY 2 BUBBLE GUM</h1>
                <p className="product-price">8900 ₽</p>
                <button className="buy-button">Купить</button>
            </div>
            <div className="product-image">
                <img src={photo1} alt="Moschino TOY 2 BUBBLE GUM" />
            </div>
            <div className="product-sidebar">
                <h2 className="sidebar_title">Сделай правильный выбор</h2>
                {/* <p className="sidebar_subtitle">{product.title}</p> */}
                <p className="sidebar_subtitle"> Культовый аромат от Moschino в виде плюшевого мишки возвращается! Второй эксклюзивный запуск, на этот раз – в стеклянном флаконе. </p>
            </div>
          </div>
            <div className="product-description">
                <h2 className="description_title">Описание</h2>
                <div className="description_border"></div>
                {/* <p className="description_subtitle">{product.description}</p> */}
                <p className="description_subtitle">Культовый аромат от Moschino в виде плюшевого мишки возвращается! Второй эксклюзивный запуск, на этот раз – в стеклянном флаконе. Искрящуюся бодрость мандарина и яблока сорта «Гренни Смит» сопровождают нежные цветочные ноты магнолии, раскрывая свежий, игривый аромат. Чистая и утонченная нота лепестков жасмина усиливается бархатистым звучанием пиона и хрустящей свежестью белой смородины. Древесные ноты амбры и сандала добавляют невероятную чувственность, в то время как акцент кристаллического мускуса наполняет аромат нежностью и сиянием.</p>
            </div>
            {/* <div className="product-footer">
                <p>Здесь будет футер страницы.</p>
            </div> */}
        </div>
    );
}

export default ProductPage;
