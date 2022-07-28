import './UserDetails.css'

import userService from '../../../services/comic.services'
import LoadingButton from '../../basicComponents/LoadingButton/LoadingButton'
import { useEffect, useState, useContext } from 'react'
import { Card } from 'react-bootstrap'
import { AuthContext } from '../../../contexts/auth.context'

const UserDetails = () => {

    const [user, setUser] = useState({})
    
    const { user_id } = useContext(AuthContext)

    useEffect(() => {

        userService
            .getOneUser(user_id)
            .then(({ data }) => {
                setUser(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>

            {
                !user ?
                    <LoadingButton /> :
                    <>
                        <Card className="bg-dark text-white 18rem">
                            <Card.Img src={user.avatar} alt="Avatar image" />
                            <Card.ImgOverlay>

                                <Card.Title> <h1>{user.username}</h1></Card.Title>
                                <Card.Text>
                                    {user.email}
                                </Card.Text>
                                <Card.Text>
                                    {user.description}
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </>
            }

        </div>


    )

}

export default UserDetails

