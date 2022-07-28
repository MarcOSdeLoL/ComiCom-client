import './ComicCard.css'

import { Card, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../contexts/auth.context'
import comicService from '../../../services/comic.services'
import userService from '../../../services/user.services'



const ComicCard = ({ title, number, cover, _id, description, owner, callComics, callMyComics, forSale }) => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [isFav, setIsFav] = useState(false)


    useEffect(() => {
        checkFavs()
    }, [isFav])

    const checkFavs = () => {

        userService
            .getOneUser(user._id)
            .then(({ data }) => {
                setIsFav(false)
                data.favComics.map(fav => {
                    if (fav._id === _id) {
                        setIsFav(true)
                        callComics()
                    } 
                })
            })
            .catch(err => console.error(err))
    }

    const handleDelete = () => {

        comicService
            .deleteComic(_id)
            .then(() => {
                callComics()
            })
            .catch(err => console.error(err))
    }

    const handleAddFavs = () => {

        userService
            .addFavs(_id)
            .then(() => {
                callMyComics && callMyComics()
                callComics && callComics()
                checkFavs()
            })
            .catch(err => console.error(err))
    }

    const handleRemoveFavs = () => {

        userService
            .removeFavs(_id)
            .then(() => {
                callMyComics && callMyComics()
                callComics && callComics()
                checkFavs()
            })
            .catch(err => console.error(err))
        
    }

    const handleAvailabilityOn = () => {

        comicService
            .setAsAvailableComic(_id)
            .then(({ data }) => {
                callMyComics && callMyComics()
                callComics && callComics()
            })
            .catch(err => console.log(err))
    }

    const handleAvailabilityOff = () => {

        comicService
            .setAsUnavailableComic(_id)
            .then(({ data }) => {
                callMyComics && callMyComics()
                callComics && callComics()
            })
            .catch(err => console.log(err))
    }

    const handleAdoption = () => {

        comicService
            .setNewComicOwner(_id)
            .then(() => {
                callComics && callComics()
                callMyComics && callMyComics()
                navigate('/comicsList')
            })
            .catch(err => console.log(err))
    }

    return (

        <Card className="ComicCard">
            <Card.Img variant="top" src={cover} />
            <Card.Body>
                <Card.Title>{title} {number}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/comicDetails/${_id}`}>
                    <Button size="sm" variant="primary" as='span'>Comic Details</Button>
                </Link>

                {owner !== user?._id &&
                    <>
                        <Button size="sm" variant="success" onClick={handleAddFavs} className={(isFav) ? 'hide' : ''}>Add to Favs</Button>
                        <Button size="sm" variant="success" onClick={handleRemoveFavs} className={(isFav) ? '' : 'hide'}>Remove from Favs </Button>

                    </>
                }

                {owner === user?._id &&
                    <>
                        <Link to={`/editComic/${_id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                            {/* <Button size="sm" variant="warning" as='span'>Edit</Button> */}
                        </Link>
                        <Button size="sm" variant="info" as='span' onClick={handleAvailabilityOn} className={(forSale) ? 'hide' : ''}>Set adoptable</Button>
                        <Button size="sm" variant="secondary" as='span' onClick={handleAvailabilityOff} className={(forSale) ? '' : 'hide'}>Not adoptable</Button>
                    </>
                }

                {owner !== user?._id && forSale &&
                    < Button size="sm" variant="danger" onClick={handleAdoption}>ADOPT</Button>
                }

                {user?.role === 'ADMIN' &&
                    <Button size="sm" variant="danger" onClick={handleDelete}>Delete</Button>
                }

            </Card.Body>
        </Card >
    )
}
export default ComicCard