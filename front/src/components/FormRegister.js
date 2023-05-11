import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import AuthService from "../services/AuthService";
import React, {useState} from 'react';
import '../styles/globalStyles.css'
import {loginUser, setAuth} from "../actions/actions";
import {useDispatch} from "react-redux";

const FormRegister = () => {
    const {registration} = AuthService()
    const dispatch = useDispatch()
    const [error, setError] = useState('');

    const handleSubmit = async (login, password, fio, email) => {
        try {
            const response = await registration(login, password, fio, email)
            localStorage.setItem('token', `${response.data.accessToken}`)
            dispatch(loginUser(response.data.user))
            dispatch(setAuth(true))
            document.body.style.overflow = 'auto'
        } catch (e) {
            setError(e.response.data.message)
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
                    <div style={{display: 'grid', justifyContent: 'center'}}>

                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={{display: 'grid'}}>
                                <label className={'input'} htmlFor={'fio'}>ФИО</label>
                            <Field
                                name={"fio"}
                                className="custom-input"
                                id={"fio"}
                                type={'text'}
                                placeholder="&nbsp;"
                            />
                            <ErrorMessage className={'errorMessage'} name={'fio'} component={'div'}/>
                            </div>
                        </div>


                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={{display: 'grid'}}>
                                <label className={'input'} >Логин</label>
                            <Field
                                name={"login"}
                                className="custom-input"
                                id={"login"}
                                type={'text'}
                                placeholder="&nbsp;"
                            />
                            <ErrorMessage className={'errorMessage'} name={'login'} component={'div'}/>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={{display: 'grid'}}>
                                <label className={'input'} >Пароль</label>
                            <Field
                                name={"password"}
                                className="custom-input"
                                id={"password"}
                                type={'password'}
                                placeholder="&nbsp;"
                            />
                            <ErrorMessage className={'errorMessage'} name={'password'} component={'div'}/>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={{display: 'grid'}}>
                                <label className={'input'}>Эл. почта</label>
                            <Field
                                name={"email"}
                                className="custom-input"
                                id={"email"}
                                placeholder="&nbsp;"
                            />
                            <ErrorMessage className={'errorMessage'} name={'email'} component={'div'}/>
                            </div>
                        </div>
                    </div>
                    {error.length > 0 ? <p className={'errorMessage'} style={{textAlign: 'center', paddingTop: '1rem'}}>{error}</p> : null}

                    <div className="center">
                <button type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                    isSubmitting = true
                    await handleSubmit(values.login, values.password, values.fio, values.email)
                    setTimeout(() => resetForm(), 500)
                }} className="register-button">Зарегистрироваться</button>
                    </div>
                </Form>
                    )}
            </Formik>
        </>
    )
}

export default FormRegister;
