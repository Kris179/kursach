import $api from "../http";
import React from 'react';

const ProductService = () => {
    const product = async (name, idProd) => {
        return $api.post('/product', {name, idProd})
    }

    const takeProductByID = async (id) => {
        return $api.get(`/products/${id}`)
    }

    const createOrder = async (user_id, product_id, FIO, address) => {
        return $api.post('/create-order', {user_id, product_id, FIO, address})
    }

    return {takeProductByID, createOrder}
}

export default ProductService
