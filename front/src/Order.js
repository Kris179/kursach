import React, { useState } from 'react';
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";
import AdminService from "./services/AdminService";
import {useNavigate} from "react-router-dom";

const CheckoutPage = () => {
    const {curUser} = useSelector((state) => state)
    const navigate = useNavigate()


    return (
        <div>
            <h2>Оформление заказа</h2>
            <Formik
                initialValues={
                {
                    FIO: curUser.FIO,
                    Email: curUser.Email,
                    Login: curUser.Login, // ?
                    Password: curUser.password // ?
                }
            }

                validationSchema={Yup.object({
                FIO: Yup.string()
                    .required('Обязательное поле!'),
                Email: Yup.string()
                    .required('Обязательное поле!'),
                Login: Yup.string()
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


                            </div>

                        </Form>
                    </>
                )}
        </Formik>
                <button type="submit">Оформить заказ</button>
        </div>
    );
};

export default CheckoutPage;
