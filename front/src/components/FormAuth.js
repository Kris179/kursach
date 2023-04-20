import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import AuthService from "../services/AuthService";
import React from 'react';

const FormAuth = () => {
    // const dispatch = useDispatch()
    const {login} = AuthService()

    const handleSubmit = async (email, password) => {
        try {
            const response = await login(email, password)
            localStorage.setItem('token', `${response.data.accessToken}`)
            // dispatch(loginUser(response.data.user))
            // dispatch(setAuth(true))
            console.log(response.data.accessToken)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    return (
        <Formik
            initialValues={
                {
                    password: '',
                    email: ''
                }
            }

            validationSchema={Yup.object({
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
                    <h1>Авторизация</h1>
                    <div>

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

                    </div>
                    <button type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                        isSubmitting = true
                        await handleSubmit(values.email, values.password)
                        setTimeout(() => resetForm(), 500)
                    }}>Войти</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormAuth;
