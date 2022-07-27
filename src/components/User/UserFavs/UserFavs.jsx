import './UserFavs.css'

import userService from '../../../services/user.services'
import LoadingButton from '../../basicComponents/LoadingButton/LoadingButton'
import FavsList from '../FavsList/FavList'

import { useEffect } from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import FavList from '../FavsList/FavList'

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
            <h1>Estos son los favoritos</h1>
            {
                myFavs.length ?
                    <FavList myFavs={myFavs} loadMyFavs={loadMyFavs} />
                    : <LoadingButton />
            }
        </Container>
    )
}
export default UserFavs