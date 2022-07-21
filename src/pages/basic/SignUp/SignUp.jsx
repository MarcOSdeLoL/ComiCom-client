import './SignUp.css'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

import authService from '../../../services/auth.services'


const SignUp = () => {

    const navigate = useNavigate()

    const [signUpInfo, setSignUpInfo] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setSignUpInfo({ ...signUpInfo, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signUpInfo)
            .then(({ data }) => navigate('/'))
            .catch(err => console.log(err))
    }

    const { username, password, email } = signUpInfo

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
                    <Form.Control type="password" value={password}  onChange={handleInputChange} name="password" />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Create account</Button>
                </div>

            </Form>

        </Container>
    )
}



export default SignUp