import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'



const UserCard = ({ username, email, _id, avatar, description, favComics }) => {

    return (

        <Card className="UserCard">
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                <Card.Text>
                    About me: {description}
                </Card.Text>
                <Card.Text>
                    Email: {email}
                </Card.Text>
                {/* <Card.Text>
                    My favourite comics:
                    <br />
                    {favComics}
                </Card.Text> */}
                <Link to={`/usersDetails/${_id}`}>
                    <Button variant="light" as='span'>User details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
export default UserCard