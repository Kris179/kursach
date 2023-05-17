import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";
import AdminService from "./services/AdminService";
import {useNavigate, useParams} from "react-router-dom";
import ProductService from "./services/ProductService";

const CheckoutPage = () => {
    const {id} = useParams()
    const {curUser} = useSelector((state) => state)
    const {createOrder} = ProductService()
    const navigate = useNavigate()

    const handleSubmit = async (FIO, address) => {
        try {
           await createOrder(curUser.UserID, id, FIO, address)
            navigate('/Profile')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <h2>Контакты</h2>
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
                    <>
                        <Form>
                            <div className="profile_forms">

                                <div className="profile_form">

                                    {<label className={'input'} >ФИО</label>}
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

                                <div className="profile_form">

                                    {<label className={'input'}>Эл. почта</label>}
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

                                <div className="profile_form">

                                    {<label className={'input'}>Адрес</label>}
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
                            }} className="register-button">Оформить заказ</button>
                        </Form>
                    </>
                )}

        </Formik>
        </div>
    );
};

export default CheckoutPage;
