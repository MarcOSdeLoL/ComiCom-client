import './ComicDetails.css'
import { Card, Container, Row, Col } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import comicService from '../../../services/comic.services'
import { useEffect, useState } from 'react'
import LoadingButton from '../../../components/basicComponents/LoadingButton/LoadingButton'


const ComicDetails = () => {

    const [comic, setComic] = useState({})
    const { comic_id } = useParams()


    useEffect(() => {

        comicService
            .getOneComic(comic_id)
            .then(({ data }) => {
                setComic(data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <Container className='mt-3'>
            <br />
            <br />
            {
                !comic ?
                    <LoadingButton /> :
                    <Row className='comicDetails'>
                        <Col md={{ offset: 1, span: 4 }}>
                            <Card className=" 18rem">
                                  <Card.Title className="text"> <h1>{comic.title} {comic.number}</h1></Card.Title>
                                    <Card.Text>
                                        <h2>
                                            {comic.pages} pages
                                            </h2>
                                    </Card.Text>

                                    <Card.Text>{comic.description}</Card.Text>
                               
                            </Card>
                        </Col>
                        <Col md={{ offset: 1, span: 4 }}>
                            <Card className=" 18rem">
                                <Card.Img src={comic.cover} alt="Card image" />
                                <Card.ImgOverlay>

                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
            }
            <br />
        </Container >
    )
}

export default ComicDetails