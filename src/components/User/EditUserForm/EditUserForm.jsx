import './EditUserForm'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import userService from '../../../services/user.services'

const EditUserForm = () => {

    // const { user_id } = useParams()

    const navigate = useNavigate()

    const [userData, setUserData] = useState({

        username: '',
        email: '',
        avatar: '',
        description: ''

    })


    const { username, email, avatar, description } = userData


    const handleChange = e => {
        const { value, name } = e.target
        setUserData({ ...UserData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        userService
            .editUser(user_id, userData)
            .then(() => navigate('/mySpace'))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        userService
            .getOneUser(user_id)
            .then(({ data }) => {
                setUserData({
                    username: data.username,
                    email: data.email,
                    avatar: data.avatar,
                    description: data.description
                                    })
            })
            .catch(err => console.log(err))
    }, [])




    return (

        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>username</Form.Label>
                            <Form.Control type="username" value={username} onChange={handleChange} name="username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" value={email} onChange={handleChange} name="email" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="avatar">
                                    <Form.Label>avatar</Form.Label>
                                    <Form.Control type="avatar" value={avatar} onChange={handleChange} name="avatar" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="cdescription">
                                    <Form.Label>description</Form.Label>
                                    <Form.Control type="description" value={description} onChange={handleChange} name="description" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="d-grid">
                            <Button variant="light" type="submit">Edit User</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default EditUserForm