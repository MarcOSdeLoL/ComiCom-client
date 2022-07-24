import './ComicCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth.context'


const ComicCard = ({ title, number, cover, _id, owner }) => {

    const { user } = useContext(AuthContext)

    return (
        <Card className="ComicCard">
            <Card.Img variant="top" src={cover} />
            <Card.Body>
                <Card.Title>{title} {number}</Card.Title>
                <Card.Text>
                    Mutant stuff, super-heros and so on.
                </Card.Text>
                <Link to={`/comicDetails/${_id}`}>
                    <Button variant="primary" as='span'>Comic Details</Button>
                </Link>
                {owner === user?._id &&
                
                    <Link to={`/editComic/${_id}`}>
                        <Button size="sm" variant="warning" as='span'>Editar</Button>
                    </Link>
                }
                {user?.role === 'ADMIN' && <Button size="sm" variant="danger" onClick={() => alert('ESTO TAMPOCO LO HE HECHO AÚN, GERMÁN')}>Eliminar</Button>}
            </Card.Body>
        </Card>
    )
}
export default ComicCard