import React, {useEffect, useState} from 'react';
import AdminService from "./services/AdminService";
import UsersTable from "./components/UsersTable";
import {useSelector} from "react-redux";

function Admin() {
    const {curUser} = useSelector((state) => state)
    const [users, setUsers] = useState([])
    const {fetchUsers} = AdminService()
    useEffect(() => {
        fetchUsers().then((data) => {
            setUsers(data.data)
        })
    }, [])

    return (

        <div>
            <h1>Админ-панель</h1>
            {curUser.Admin ? <UsersTable users={users}/> : null}
        </div>
    )

}

export default Admin;