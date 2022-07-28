import './UserList.css'

import UserCard from '../UserCard/UserCard'
import { Col, Row } from 'react-bootstrap'

const UserList = ({ loadUsers, users }) => {

    console.log(users)

    return (

        <Row>
            {users.map(user => {

                // WHAT DA HELL IS THIS KEY?
                return (

                    <Col md={3} key={user._id} >
                        <UserCard {...user} />
                    </Col>
                )
            })}

        </Row>
    )
}

export default UserList