import React, {useEffect, useState} from 'react';
import AdminService from "./services/AdminService";
import UsersTable from "./components/UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {loginUser, setAuth} from "./actions/actions";
import photo1 from "./img/Мишка.png";


function Profile() {

    const {curUser} = useSelector((state) => state)
    const [users, setUsers] = useState([])
    const [tab, setTab] = useState("info")
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
            <div className="orders">
              <div className="orders_cont">
                <h2 className="orders_title">Выполнен</h2>
                <p className="orders_number">Заказ №356765432</p>
                <p className="orders_text">3 марта 2021 г.</p>
                <p className="orders_text">8 900 ₽</p>
              </div>
              <img className="orders_img" src={photo1} alt="фото" />
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
                        type={'text'}
                        placeholder="&nbsp;"
                        enableReinitialize={true}
                        value={curUser.Login}
                        disabled={true}
                      />

                      <ErrorMessage className={'errorMessage'} name={'Login'} component={'div'} />
                      <button className="profile_password-button" tupe="button">изменить пароль</button>

                    </div>

                  </div>

                  <button type={'submit'} onClick={async () => {
                    isSubmitting = true
                    await handleSubmit(values.email, values.password)
                    setTimeout(() => resetForm(), 500)
                  }} className="profile_submit-button">Сохранить изменения</button>
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