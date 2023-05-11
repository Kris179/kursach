import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import AuthService from "../services/AuthService";
import React, {useEffect, useState} from 'react';
import '../styles/globalStyles.css'
import {useDispatch} from "react-redux";
import {loginUser, setAuth} from "../actions/actions";
import ProductService from "../services/ProductService";

const FormPr = () => {
    // const dispatch = useDispatch()
    const dispatch = useDispatch()
    const product = ProductService()
    const [error, setError] = useState('');


    // const handleSubmit = async (email, password) => {
    //     try {
    //         const response = await login(email, password)
    //         localStorage.setItem('token', `${response.data.accessToken}`)
    //         dispatch(loginUser(response.data.user))
    //         dispatch(setAuth(true))
    //         console.log(response.data.accessToken)
    //         document.body.style.overflow = 'auto'
    //     } catch (e) {
    //         setError(e.response.data.message)
    //     }
    // }
    const add = async(name, file)=>{
        const formData = new FormData();
        formData.append("file", file);

        console.log(formData)
        const result = await fetch("http://localhost:8083/photo/upload",{
            method:"POST",
            body: formData

        });
        console.log(name,result.json())

        // try{
        //             const response = await product(name, result.photoId)
        //
        //         } catch (e) {
        //             setError(e.response.data.message)
        //         }


    }

    useEffect(() => {

        return () => {
            setError('')
        }
    }, [])

    return (

        <Formik
            initialValues={
                {
                    name: '',
                    file: null
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
                <>
                    <Form>
                        <div>

                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div style={{display: 'grid'}}>
                                    <label className={'input'}>Эл. почта</label>
                                    <Field
                                        name={"name"}
                                        className="custom-input"
                                        id={"name"}
                                        placeholder="&nbsp;"
                                    />

                                    {/*<ErrorMessage className={'errorMessage'} name={'email'} component={'div'}/>*/}
                                </div>
                            </div>

                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div style={{display: 'grid'}}>
                                    <label className={'input'} >Пароль</label>
                                    <Field
                                        name={"file"}
                                        className="custom-input"
                                        id={"file"}
                                        type={'file'}
                                        placeholder="&nbsp;"
                                    />

                                    {/*<ErrorMessage className={'errorMessage'} name={'password'} component={'div'}/>*/}
                                </div>
                            </div>

                        </div>
                        {error.length > 0 ? <p className={'errorMessage'} style={{textAlign: 'center', paddingTop: '1rem'}}>{error}</p> : null}
                        <div className="center">
                            <button type={'submit'}  onClick={async () => {
                                console.log(values.file)
                                // isSubmitting = true
                                await add(values.name, values.file)
                                setTimeout(() => resetForm(), 500)
                            }} className="register-button">Войти</button>
                        </div>
                    </Form>
                </>
            )}
        </Formik>
    )
}

export default FormPr;
