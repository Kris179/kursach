import $api from "../http";
import React from 'react';

const AdminService = () => {
    const fetchUsers = async () => {
        return $api.get('/users')
    }

    return {fetchUsers}
}

export default AdminService
