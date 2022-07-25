import './ComicCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth.context'
import comicService from '../../../services/comic.services'


const ComicCard = ({ title, number, cover, _id, owner, callComics }) => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleDelete = e => {

        comicService
            .deleteComic(_id)
            .then(() => {
                callComics()
                navigate('/comicsList')
            })
            .catch(err => console.error(err))
    }

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
                        <Button size="sm" variant="warning" as='span'>Edit</Button>
                    </Link>
                }

                {user?.role === 'ADMIN' &&

                    <Button size="sm" variant="danger"
                        onClick={handleDelete}
                    >Delete</Button>


                }
            </Card.Body>
        </Card>
    )
}
export default ComicCard