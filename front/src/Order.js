import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";
import AdminService from "./services/AdminService";
import {useNavigate, useParams} from "react-router-dom";
import ProductService from "./services/ProductService";
import photo1 from "./img/Мишка.png";

const CheckoutPage = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const {curUser} = useSelector((state) => state)
    const {createOrder, takeProductByID} = ProductService()
    const navigate = useNavigate()

    useEffect(() => {
        takeProductByID(id).then((data) => {
            setProduct(data.data[0])
        })
    }, [])
    const handleSubmit = async (FIO, address) => {
        try {
           await createOrder(curUser.UserID, id, FIO, address)
            navigate('/Profile')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='orders_conts'>
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
                    <div className='cont'>
                        <Form>
                            <h2 className='orders_forms_title'>Контакты</h2>
                            <div className="orders_forms">
                                
                                <h2 className='orders_form_subtitle'>Ваши контакты</h2>
                                <div className="orders_form">
                                  
                                  {<p className={'orders_form_label'} >ФИО</p>}
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

                                <div className="orders_form">

                                    {<p className={'orders_form_label'}>Эл. почта</p>}
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

                                <div className="orders_form">

                                    {<p className={'orders_form_label'}>Адрес</p>}
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
                                <p className='orders_warning'>ВНИМАНИЕ! Нажимая на кнопку “Я согласен на обработку своих данных”
                                                              вы соглашаетесь с нашим <span className='orders_link'>пользовательским соглашением</span></p>

                            </div>
                            {/* <button type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                isSubmitting = true
                                await handleSubmit(values.FIO, values.address)
                                setTimeout(() => resetForm(), 500)
                            }} className="register-button">Оформить заказ</button> */}
                        </Form>

{/* // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

              <div className='orders_price'>
                <h2 className='orders_forms_title'>Ваши товары</h2>
                <div className='orders_price_card'>
                  {/* через мап отдельный компонент orders_card*/}
                  <div className='orders_card'>
                    <div className='orders_card_nav'>
                      <p className="order_card_code">Code: 12437232</p>
                      <button className="order_card_del_button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.0075 0.0148926C4.51988 0.0148926 0.0297852 4.50499 0.0297852 9.99262C0.0297852 15.4803 4.51988 19.9703 10.0075 19.9703C15.4951 19.9703 19.9852 15.4803 19.9852 9.99262C19.9852 4.50499 15.4951 0.0148926 10.0075 0.0148926ZM10.0075 18.9726C5.05185 18.9726 1.02756 14.9481 1.02756 9.99262C1.02756 5.03696 5.05203 1.01267 10.0075 1.01267C14.9632 1.01267 18.9875 5.03713 18.9875 9.99262C18.9875 14.9483 14.9632 18.9726 10.0075 18.9726ZM14.3978 6.30086L10.7061 9.99262L14.3978 13.6844C14.5974 13.8839 14.5974 14.1832 14.3978 14.3829C14.2981 14.4827 14.1649 14.5159 14.032 14.5159C13.899 14.5159 13.7659 14.4827 13.6661 14.3829L10.0075 10.6912L6.31573 14.3829C6.21597 14.4827 6.0828 14.5159 5.94987 14.5159C5.81693 14.5159 5.68377 14.4827 5.58401 14.3829C5.38449 14.1834 5.38449 13.8841 5.58401 13.6844L9.30896 9.99262L5.61721 6.30086C5.41769 6.10134 5.41769 5.80207 5.61721 5.6023C5.81672 5.40278 6.116 5.40278 6.31577 5.6023L10.0075 9.29406L13.6993 5.6023C13.8988 5.40278 14.1981 5.40278 14.3978 5.6023C14.5974 5.80205 14.5974 6.10132 14.3978 6.30086Z" fill="#9F9F9F" />
                        </svg>
                      </button>
                    </div>
                    <div className="orders_card_info">
                      <div className='orders_card_header'>
                        <img className="orders_card_img" src={photo1} alt="фото" />
                        <h2 className="orders_card_title">Moschino TOY 2BUBBLE GUM 12UHS-208RU (SM-X205NZAASEK)</h2>
                      </div>
                      <p className="orders_card_price">8 900 руб</p>
                    </div>
                  </div>
                  {/* через мап отдельный компонент orders_card*/}
                  {/* <button className="order_price_submit">Сделать заказ</button> */}
                  <button type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                    isSubmitting = true
                    await handleSubmit(values.FIO, values.address)
                    setTimeout(() => resetForm(), 500)
                  }} className="orders_price_submit">Оформить заказ</button>
                </div>
              </div>
                    </div>
                )}

        </Formik>
            {/* <div>{product.Name}
                {product.Price}
                {product.description}
                {product.title}</div> */}
                
                
        </div>
    );
};

export default CheckoutPage;
