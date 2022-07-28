import './SignUp.css'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

import authService from '../../../services/auth.services'
import uploadService from '../../../services/upload.services'

const SignUp = () => {

    const navigate = useNavigate()

    const [signUpInfo, setSignUpInfo] = useState({
        username: '',
        email: '',
        password: '',
        description: '',
        avatar: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setSignUpInfo({ ...signUpInfo, [name]: value })
    }

    const handleAvatarChange = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadimage(uploadData)
            .then(({ data }) => {

                console.log('555555', data)
                setLoadingImage(false)
                setSignUpInfo({ ...signUpInfo, avatar: data.cloudinary_url })
            })
            .catch(err => console.log(err))

    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signUpInfo)
            .then(({ data }) => navigate('/'))
            .catch(err => console.log(err))
    }

    const { username, password, email, description } = signUpInfo

    return (
        <Container>
            <h1>Register</h1>

            <Form onSubmit={handleSubmit} >

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>Avatar Image</Form.Label>
                    <Form.Control type="file" onChange={handleAvatarChange} name="avatar" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                </Form.Group>



                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Please, wait' : 'Create Account'}</Button>


            </Form>

        </Container>
    )
}



export default SignUp