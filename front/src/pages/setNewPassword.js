import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useState} from "react";
import AuthService from "../services/AuthService";
import {useDispatch} from "react-redux";
import {loginUser, setAuth} from "../actions/actions";
import {useNavigate, useParams} from "react-router-dom";

const setNewPassword = () => {
    const {id} = useParams()
    const {setPassword} = AuthService()
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (password) => {
        try {
            await setPassword(id, password)
            navigate('/')
        } catch (e) {
            setError(e.response.data.message)
        }
    }
    return (
        <Formik
            initialValues={
                {
                    password: '',
                }
            }

            validationSchema={Yup.object({
                password: Yup.string()
                    .min(6, 'Длина пароля должна быть больше 6 символов!')
                    .required('Обязательное поле!')
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
                        <div>

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

                        </div>
                        {error.length > 0 ? <p className={'errorMessage'} style={{textAlign: 'center', paddingTop: '1rem'}}>{error}</p> : null}
                        <div className="center">
                            <button type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                isSubmitting = true
                                await handleSubmit(values.password)
                                setTimeout(() => resetForm(), 500)
                            }} className="register-button">Отправить</button>
                        </div>
                    </Form>
                </>
            )}
        </Formik>
    )
}

export default setNewPassword