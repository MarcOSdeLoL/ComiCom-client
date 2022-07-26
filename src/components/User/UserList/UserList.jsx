import './UserList.css'

import UserCard from '../../Comic/ComicCard/ComicCard'
import {Col, Row} from 'react-bootstrap'

const UserList = (users) => {
//AQUÍ FALTARÍA CALLUSERS REF COMICS CARD
    return (

        <Row>
            {users.map(user => {

                // WHAT DA HELL IS THIS KEY?
                return (

                    <Col md={3} key={user._id} >
                        <UserCard {...user} 
                        // callComics={callComics}
                        />
                    </Col>
                )
            })}

        </Row>
    )
}

export default UserList