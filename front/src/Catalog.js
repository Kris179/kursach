import React from 'react';
import './styles/globalStyles.css'
import CatalogCards from "./components/CatalogCards";
import Footer from "./components/Footer";

const Catalogue = () => {
    const handleBuyClick = (productId) => {
        // Обработчик событий для кнопки "Купить"
        console.log(`Товар с ID ${productId} добавлен в корзину`);
    };

    return (
        <div>
        <h1 style={{paddingLeft: '45%', color:'black', marginTop:'30px'}}>Каталог</h1>
        <CatalogCards/>
            <Footer/>
        </div>
    );
};

export default Catalogue;
