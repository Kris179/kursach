import React, {useEffect, useState} from 'react';
import AdminService from "./services/AdminService";
import UsersTable from "./components/UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {loginUser, setAuth} from "./actions/actions";



function Profile() {

    const {curUser} = useSelector((state) => state)
    const [users, setUsers] = useState([])
    const {fetchUsers} = AdminService()
    useEffect(() => {
        fetchUsers().then((data) => {
            setUsers(data.data)
        })
    }, [])

    const dispatch = useDispatch()

    const handleSubmit = async (email, password) => {
        try {
            // const response = await login(email, password)
            // localStorage.setItem('token', `${response.data.accessToken}`)
            // dispatch(loginUser(response.data.user))
            // dispatch(setAuth(true))
            // console.log(response.data.accessToken)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    return (

        <>
            <h1>Профиль</h1>
            <Formik
                initialValues={
                    {
                        FIO: curUser.FIO,
                        Email: curUser.Email,
                        Login: curUser.Login
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
                            <div>

                                <div style={{display: 'flex', justifyContent: 'start'}}>
                                    <div style={{display: 'grid'}}>
                                        <label className={'input'}>Эл. почта</label>
                                        <Field
                                            name={"Email"}
                                            className="custom-input"
                                            id={"Email"}
                                            placeholder="&nbsp;"
                                            enableReinitialize={true}
                                            value={curUser.Email}
                                            disabled={true}
                                        />

                                        <ErrorMessage className={'errorMessage'} name={'Email'} component={'div'}/>
                                    </div>
                                </div>

                                <div style={{display: 'flex', justifyContent: 'start'}}>
                                    <div style={{display: 'grid'}}>
                                        <label className={'input'} >ФИО</label>
                                        <Field
                                            name={"FIO"}
                                            className="custom-input"
                                            id={"FIO"}
                                            type={'text'}
                                            placeholder="&nbsp;"
                                            enableReinitialize={true}
                                            value={curUser.FIO}
                                            disabled={true}
                                        />

                                        <ErrorMessage className={'errorMessage'} name={'FIO'} component={'div'}/>
                                    </div>
                                </div>

                                <div style={{display: 'flex', justifyContent: 'start'}}>
                                    <div style={{display: 'grid'}}>
                                        <label className={'input'} >Логин</label>
                                        <Field
                                            name={"Login"}
                                            className="custom-input"
                                            id={"Login"}
                                            type={'text'}
                                            placeholder="&nbsp;"
                                            enableReinitialize={true}
                                            value={curUser.Login}
                                            disabled={true}
                                        />

                                        <ErrorMessage className={'errorMessage'} name={'Login'} component={'div'}/>
                                    </div>
                                </div>

                            </div>
                            <div className="">
                                <button type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                    isSubmitting = true
                                    await handleSubmit(values.email, values.password)
                                    setTimeout(() => resetForm(), 500)
                                }} className="register-button">Изменить</button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </>
    )
}

export default Profile;