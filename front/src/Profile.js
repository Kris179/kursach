import React, {useEffect, useState} from 'react';
import AdminService from "./services/AdminService";
import UsersTable from "./components/UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {loginUser, setAuth} from "./actions/actions";
import photo1 from "./img/Мишка.png";
import AuthService from "./services/AuthService";
import {useNavigate} from "react-router-dom";
import ProductService from "./services/ProductService";


function Profile() {

    const {curUser} = useSelector((state) => state)
    const [users, setUsers] = useState([])
    const [orders, setOrders] = useState([])
    const [tab, setTab] = useState("info")
    const {fetchUsers} = AdminService()
    const {takeOrders} = ProductService()
    const navigate = useNavigate()
    useEffect(() => {
        fetchUsers().then((data) => {
            setUsers(data.data)
        })
        takeOrders(curUser.UserID).then((data) => {
            setOrders(data.data)
        })
    }, [curUser.UserID])
    console.log(orders)
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

    const handleTab = (el) => {
        setTab(el)
    }

    const setTitle = (tab) => tab === "info" ? "Личные данные" : "История заказов"

    return (
        <>
            <h1 className="profile_title">{setTitle(tab)}</h1>
            <div className="profile">
                <div className="profile_tabs">
                    <p onClick={() => handleTab("info")} className={tab === "info" ? "profile_tab profile_tab__active" : "profile_tab"}>личные данные</p>
                    <p onClick={() => handleTab("orders")} className={tab === "orders" ? "profile_tab profile_tab__active" : "profile_tab"}>история заказов</p>
                </div>

                {tab === "orders" &&
                    <div className="profile_orders">
                        {orders.map(({...props}, index) => {
                        return (

                                <OrderItem {...props} key={index}/>

                        )
                    })}
                    </div>
                }
                {tab === "info" &&
                    <div className="profile_info">
                        <p className="profile_info_title">ФИО</p>
                        <p className="profile_info_title">E-mail</p>
                        <p className="profile_info_title">Пароль</p>
                    </div>
                }
                {tab === "info" &&
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

                                            {/* <label className={'input'}>Эл. почта</label> */}
                                            <Field
                                                name={"FIO"}
                                                className="custom-input"
                                                id={"FIO"}
                                                placeholder="&nbsp;"
                                                enableReinitialize={true}
                                                value={curUser.FIO}
                                                disabled={true}
                                            />

                                            <ErrorMessage className={'errorMessage'} name={'Email'} component={'div'} />

                                        </div>

                                        <div className="profile_form">

                                            {/* <label className={'input'} >ФИО</label> */}
                                            <Field
                                                name={"Email"}
                                                className="custom-input"
                                                id={"Email"}
                                                type={'text'}
                                                placeholder="&nbsp;"
                                                enableReinitialize={true}
                                                value={curUser.Email}
                                                disabled={true}
                                            />

                                            <ErrorMessage className={'errorMessage'} name={'FIO'} component={'div'} />

                                        </div>

                                        <div className="profile_form form_password">

                                            {/* <label className={'input'} >Логин</label> */}
                                            <Field
                                                name={"Password"}
                                                className="custom-input"
                                                id={"Password"}
                                                type={'password'}
                                                placeholder="&nbsp;"
                                                enableReinitialize={true}
                                                value={curUser.Login}
                                                disabled={true}
                                            />

                                            <ErrorMessage className={'errorMessage'} name={'Login'} component={'div'} />
                                            <button onClick={() => navigate(`/set-password/${curUser.UserID}`)} className="profile_password-button" type="button">изменить пароль</button>

                                        </div>

                                    </div>

                                </Form>
                            </>
                        )}
                    </Formik>
                }

            </div>
        </>
    )
}

// disabled={!(isValid && dirty) || isSubmitting}

export default Profile;

const OrderItem = ({FIO, Name, status, PhotoID, address, title, date, description, id, Price}) => {
    const newDate = new Date(date).toLocaleString()
    return (
        <div className="orders">
            <div className="orders_cont">
                <h2 className="orders_title">{status}</h2>
                <p className="orders_number">Заказ №{id}</p>
                <p className="orders_text">{newDate}</p>
                <p className="orders_text">{Price} ₽</p>
            </div>
            <img className="orders_img" src={`http://localhost:8083/photo/${PhotoID}`} alt="фото" />
        </div>
    )
}