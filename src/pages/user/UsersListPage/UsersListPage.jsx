import './UsersListPage.css'

import userService from '../../../services/user.services'
import UserList from '../../../components/User/UserList/UserList'
import LoadingButton from '../../../components/basicComponents/LoadingButton/LoadingButton'

import {Container} from 'react-bootstrap'
import { useState, useEffect } from 'react'

const UsersListPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        callUsers()
    }, [])

    const callUsers =() => {

        userService
            .getAllUsers()
            .then(({data}) => {
                setUsers(data)
            })
            .catch(err => console.error(err))

    }

    return (
        
        <Container >
            <h1>All the users!</h1>
            <br />
            {
        users.length ? <UserList users={users} callUsers={callUsers} /> : <LoadingButton />
    }

        </Container >

    )
}

export default UsersListPage