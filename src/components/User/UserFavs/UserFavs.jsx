import './UserFavs.css'

import userService from '../../../services/user.services'
import LoadingButton from '../../basicComponents/LoadingButton/LoadingButton'
import FavList from '../FavsList/FavList'

import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

const UserFavs = () => {

    const [myFavs, setMyFavs] = useState([])

    useEffect(() => {
        loadMyFavs()
    }, [])

    const loadMyFavs = () => {

        userService
            .getFavs()
            .then(({ data }) => {
                setMyFavs(data)
            })
            .catch(err => console.error(err))
    }

    return (
        <Container>
            {
                myFavs.length ? <FavList myFavs={myFavs} loadMyFavs={loadMyFavs} /> : <LoadingButton />
            }
        </Container>
    )
}
export default UserFavs