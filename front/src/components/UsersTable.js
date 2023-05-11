import React, {useEffect, useState} from 'react';
import '../styles/globalStyles.css'
const UsersTable = (props) => {
    console.log(props.users)
    return (
        <div>
            <h3>Все пользователи</h3>
            <table className={"table"}>
                <thead>
                <tr>
                    <th>UserID</th>
                    <th>Login</th>
                    <th>Email</th>
                    <th>FIO</th>
                    <th>Activation</th>
                    <th>Admin</th>
                </tr>
                </thead>
                <tbody>
                {props.users.map(({...props}, index) => {
                    console.log(props)
                    return <UsersTableItem props={props} key={index}/>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable

const UsersTableItem = ({props}) => {

    return (
        <tr>
            <td>{props.UserID}</td>
            <td>{props.Login}</td>
            <td>{props.Email}</td>
            <td>{props.FIO}</td>
            <td>{props.Activation ? 'Да' : 'Нет'}</td>
            <td>{props.Admin ? 'Да' : 'Нет'}</td>
        </tr>
    )
}