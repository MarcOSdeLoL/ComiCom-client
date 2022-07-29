import './UserList.css'

import UserCard from '../UserCard/UserCard'
import { Col, Row } from 'react-bootstrap'

const UserList = ({ loadUsers, users }) => {

    console.log(users)

    return (

        <>
            {users.map(user => {

                return (

                    <Col className="userCardCol" md={3} key={user._id} >
                        <UserCard {...user} />
                    </Col>
                )
            })
            }
        </>


    )
}

export default UserList