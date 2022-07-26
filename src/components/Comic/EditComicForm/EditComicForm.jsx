import './EditComicForm.css'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import comicService from '../../../services/comic.services'

const EditComicForm = () => {

    const { comic_id } = useParams()

    const navigate = useNavigate()

    const [comicData, setComicData] = useState({

        title: '',
        number: '',
        pages: '',
        cover: '',
        forSale: ''

    })


    const { title, number, pages, cover,
        // forSale
     } = comicData


    const handleChange = e => {
         const { value, name } = e.target
         setComicData({ ...comicData, [name]: value })
     }
         
     const handleSubmit = e => {

         e.preventDefault()
         
         comicService
             .editComic(comic_id, comicData)
             .then(() => navigate('/comicsList'))
             .catch(err => console.error(err))
     }

    useEffect(() => {
         comicService
             .getOneComic(comic_id)
             .then(({ data }) => {
                 setComicData({
                     title: data.title,
                     number: data.number,
                     pages: data.pages,
                     cover: data.cover
                    //  ,
                    //  forSale: data.forSale
                 })
             })
             .catch(err => console.log(err))
     }, [])




    return (

        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={handleChange} name="title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="number">
                            <Form.Label>number</Form.Label>
                            <Form.Control type="number" value={number} onChange={handleChange} name="number" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="pages">
                                    <Form.Label>pages</Form.Label>
                                    <Form.Control type="number" value={pages} onChange={handleChange} name="pages" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="cover">
                                    <Form.Label>Image (URL)</Form.Label>
                                    <Form.Control type="text" value={cover} onChange={handleChange} name="cover" />
                                </Form.Group>
                            </Col>
                        </Row>
                        {/* TO HANDLE FOR SALE KEY
                            <Form.Group className="mb-3" controlId="forSale">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                        {/*                          <Form.Group className="mb-3" controlId="description">
                             <Form.Label>Description</Form.Label>
                             <Form.Control as="textarea" type="text" value={description} onChange={handleChange} name="description" />
                         </Form.Group> */}
                        <div className="d-grid">
                            <Button variant="light" type="submit">Edit Comic</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default EditComicForm