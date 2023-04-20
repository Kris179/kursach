import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import AuthService from "../services/AuthService";
import React from 'react';
import '../styles/globalStyles.css'

const FormRegister = () => {
    const {registration} = AuthService()

    const handleSubmit = async (login, password, fio, email) => {
        try {
            await registration(login, password, fio, email)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    return (
        <>
            <Formik
                initialValues={
                    {
                        login: '',
                        password: '',
                        fio: '',
                        email: ''
                    }
                }

                validationSchema={Yup.object({
                    fio: Yup.string()
                        .required('Обязательное поле!'),
                    login: Yup.string()
                        .min(2, 'Минимум 2 символа!')
                        .required('Обязательное поле!'),
                    password: Yup.string()
                        .min(6, 'Длина пароля должна быть больше 6 символов!')
                        .required('Обязательное поле!'),
                    email: Yup.string()
                        .email('Некорректная эл. почта!')
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
                <Form>
                    <h1>Регистрация</h1>
                    <div>

                            <div>
                                <Field
                                    name={"fio"}
                                    className="custom-input"
                                    id={"fio"}
                                    type={'text'}
                                    placeholder="&nbsp;"
                                />
                                <label htmlFor={'fio'}>ФИО</label>
                                <ErrorMessage name={'fio'} component={'div'}/>
                            </div>


                        <div>
                            <Field
                                name={"login"}
                                className="form-control"
                                id={"login"}
                                type={'text'}
                                placeholder="&nbsp;"
                            />
                            <label>Логин</label>
                            <ErrorMessage name={'login'} component={'div'}/>
                        </div>

                        <div>
                            <Field
                                name={"password"}
                                className="form-control"
                                id={"password"}
                                type={'password'}
                                placeholder="&nbsp;"
                            />
                            <label>Пароль</label>
                            <ErrorMessage name={'password'} component={'div'}/>
                        </div>

                        <div>
                            <Field
                                name={"email"}
                                className="form-control"
                                id={"email"}
                                placeholder="&nbsp;"
                            />
                            <label>Эл. почта</label>
                            <ErrorMessage name={'email'} component={'div'}/>
                        </div>
                    </div>
                <button type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                    isSubmitting = true
                    await handleSubmit(values.login, values.password, values.fio, values.email)
                    setTimeout(() => resetForm(), 500)
                }}>Зарегестрироваться</button>
                </Form>
                    )}
            </Formik>
        </>
    )
}

export default FormRegister;
