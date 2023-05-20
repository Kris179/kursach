import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";
import AdminService from "./services/AdminService";
import {useNavigate, useParams} from "react-router-dom";
import ProductService from "./services/ProductService";
import photo1 from "./img/Мишка.png";

const CheckoutPage = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const {curUser} = useSelector((state) => state)
    const {createOrder, takeProductByID} = ProductService()
    const navigate = useNavigate()

    useEffect(() => {
        takeProductByID(id).then((data) => {
            setProduct(data.data[0])
        })
    }, [])
    const handleSubmit = async (FIO, address) => {
        try {
           await createOrder(curUser.UserID, id, FIO, address)
            navigate('/Profile')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='orders_conts'>
            <Formik
                initialValues={
                {
                    FIO: curUser.FIO,
                    Email: curUser.Email,
                    address: '' // ?
                }
            }

                validationSchema={Yup.object({
                FIO: Yup.string()
                    .required('Обязательное поле!'),
                Email: Yup.string()
                    .required('Обязательное поле!'),
                address: Yup.string()
                    .required('Обязательное поле!'),
            })}

                onSubmit={
                values => console.log(JSON.stringify(values))
            }>
                {({
                      values,
                      isValid,
                      dirty,
                      isSubmitting,
                      resetForm
                  }) => (
                    <div className='cont'>
                        <Form>
                            <h2 className='orders_forms_title'>Контакты</h2>
                            <div className="orders_forms">

                                <h2 className='orders_form_subtitle'>Ваши контакты</h2>
                                <div className="orders_form">


                                    {<p className={'orders_form_label'}>ФИО</p>}
                                    <Field
                                        name={"FIO"}
                                        className="custom-input"
                                        id={"FIO"}
                                        placeholder="&nbsp;"
                                        enableReinitialize={true}
                                        value={curUser.FIO}
                                    />

                                    <ErrorMessage className={'errorMessage'} name={'Email'} component={'div'} />

                                </div>

                                <div className="orders_form">

                                    {<p className={'orders_form_label'}>Эл. почта</p>}
                                    <Field
                                        name={"Email"}
                                        className="custom-input"
                                        id={"Email"}
                                        type={'text'}
                                        placeholder="&nbsp;"
                                        enableReinitialize={true}
                                        value={curUser.Email}
                                    />

                                    <ErrorMessage className={'errorMessage'} name={'FIO'} component={'div'} />

                                </div>


                                <div className="orders_form">

                                    {<p className={'orders_form_label'}>Адрес</p>}
                                    <Field
                                        name={"address"}
                                        className="custom-input"
                                        id={"address"}
                                        type={'text'}
                                        placeholder="&nbsp;"
                                        enableReinitialize={true}
                                    />

                                    <ErrorMessage className={'errorMessage'} name={'FIO'} component={'div'} />

                                </div>


                            </div>
                            <button type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                isSubmitting = true
                                await handleSubmit(values.FIO, values.address)
                                setTimeout(() => resetForm(), 500)
                            }} className="order-button">Оформить заказ</button>
                        </Form>
                    </div>
                )}

        </Formik>
            <div className='orders_price'>
                <h2 className='orders_forms_title'>Ваши товары</h2>
                <div className='orders_price_card'>
                    <div className='orders_card'>
                        <div className='orders_card_nav'>
            <div className="orders_card_info" >
                <div className='orders_card_header'>
                    <img className="orders_card_img" src={photo1} alt="фото" />
                    <h2 className="orders_card_title">{product.Name}</h2>
                </div>
                <p className="orders_card_price">{product.Price}₽</p>
            </div>
        </div>
        </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
