import './ComicCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth.context'
import comicService from '../../../services/comic.services'
import userService from '../../../services/user.services'



const ComicCard = ({ title, number, cover, _id, owner, callComics, callMyComics, forSale }) => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleDelete = () => {

        comicService
            .deleteComic(_id)
            .then(() => {
                callComics()
                navigate('/comicsList')
            })
            .catch(err => console.error(err))
    }

    const handleAddFavs = () => {

        userService
            .addFavs(_id)
            .then(() => {
                callComics()
                navigate('/comicsList')
            })
            .catch(err => console.error(err))
    }

    const handleAvailabilityOn = () => {

        comicService
            .setAsAvailableComic(_id)
            .then(({ data }) => {
                callMyComics()
                console.log('AHORA ESTA DISPONIBLE:', data)
                navigate('/myComics')
            })
            .catch(err => console.log(err))
    }

    const handleAvailabilityOff = () => {

        comicService
            .setAsUnavailableComic(_id)
            .then(({ data }) => {
                callMyComics()
                console.log('AHORA NO ESTA DISPONIBLE:', data)
                navigate('/myComics')
            })
            .catch(err => console.log(err))
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

                {owner !== user?._id &&

                    <Button size="sm" variant="success" onClick={handleAddFavs}>Add to Favs!</Button>
                }

                {owner === user?._id &&
                    <>
                        <Link to={`/editComic/${_id}`}>
                            <Button size="sm" variant="warning" as='span'>Edit</Button>
                        </Link>
                        <Button size="sm" variant="info" as='span' onClick={handleAvailabilityOn} className={(forSale) ? 'hide' : ''}>Set adoptable</Button>
                        <Button size="sm" variant="secondary" as='span' onClick={handleAvailabilityOff} className={(forSale) ? '' : 'hide'}>Not anymore</Button>
                    </>
                }

                {user?.role === 'ADMIN' &&

                    <Button size="sm" variant="danger" onClick={handleDelete}>Delete</Button>
                }

            </Card.Body>
        </Card>
    )
}
export default ComicCard