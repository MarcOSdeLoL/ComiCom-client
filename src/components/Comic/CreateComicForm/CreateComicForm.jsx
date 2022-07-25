import './CreateComicForm.css'

import { useState } from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

import comicService from '../../../services/comic.services'



const CreateComicForm = () => {

    const navigate = useNavigate()

    const [createComicInfo, setCreateComicInfo] = useState({
        title: '',
        number: '',
        pages: '',
        cover: ''
    })

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setCreateComicInfo({ ...createComicInfo, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        comicService
            .createComic(createComicInfo)
            .then(({ data }) => navigate('/comicsList'))
            .catch(err => console.log(err))
    }

    const { title, number, pages, cover } = createComicInfo

    return (

        <Container>

            <Form onSubmit={handleSubmit} >

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="textarea">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="textarea" value={description} onChange={handleInputChange} name="description" />
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="number">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="number" value={number} onChange={handleInputChange} name="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pages">
                    <Form.Label>Pages</Form.Label>
                    <Form.Control type="number" value={pages} onChange={handleInputChange} name="pages" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cover">
                    <Form.Label>Image (URL)</Form.Label>
                    <Form.Control type="text" value={cover} onChange={handleInputChange} name="cover" />
                </Form.Group>

                {/* CON ARCHIVO */}

                {/* <Form.Group className="mb-3" controlId="imageUrl">
                    <Form.Label>Imagen (Archivo)</Form.Label>
                    <Form.Control type="file" onChange={handleFileInput} name="imageUrl" />
                </Form.Group> */}

                <div className="d-grid">
                    <Button variant="dark" type="submit">Create Comic</Button>
                </div>

            </Form>

        </Container>

    )
}
export default CreateComicForm