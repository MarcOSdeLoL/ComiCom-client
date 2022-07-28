import './EachUserDetails.css'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import userService from '../../../services/user.services'
import comicService from '../../../services/comic.services'
import ComicCard from '../../Comic/ComicCard/ComicCard'

const EachUserDetails = () => {

    const { user_id } = useParams()

    const [host, setHost] = useState(null)
    const [hostComics, setHostComics] = useState(null)

    useEffect(() => {
        loadUser()
        loadComics()
    }, [])

    const loadUser = () => {

        userService
            .getOneUser(user_id)
            .then(({ data }) => setHost(data))
            .catch(err => console.log(err))
    }

    const loadComics = () => {

        comicService
            .getHostComics(user_id)
            .then(({ data }) => {
                console.log('---host comics---', data)
                setHostComics(data)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Row>

                <Col md={9}>
                    <h1>{host?.username}'s comics</h1>

                    <Row>

                        {hostComics
                            ?
                            (hostComics.length
                                ?
                                <>
                                    {hostComics.map(comic => {

                                        return (
                                            <Col md={3} key={comic._id} >
                                                <ComicCard {...comic} />
                                            </Col>
                                        )
                                    })
                                    }
                                </>
                                :
                                <h5>No comics</h5>
                            )
                            :
                            'MARCOS AQUI TIENES QUE PONER UN LOADER'
                            //// LOADER
                        }

                    </Row>


                </Col>

                <Col md={3}>
                    <img className="otherUserAvatarPic" src={host?.avatar}></img>

                    <h2>{host?.username}</h2>
                    <hr />
                    <h5>{host?.description}</h5>
                </Col>

            </Row>
        </>
    )
}

export default EachUserDetails