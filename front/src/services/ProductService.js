import $api from "../http";
import React from 'react';

const ProductService = () => {
    const product = async (name, idProd) => {
        return $api.post('/product', {name, idProd})
    }

    const takeProductByID = async (id) => {
        return $api.get(`/products/${id}`)
    }

    return {takeProductByID}
}

export default ProductService
