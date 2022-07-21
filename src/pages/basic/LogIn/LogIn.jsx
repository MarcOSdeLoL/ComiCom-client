import './LogIn.css'
import { Form, Button } from "react-bootstrap"
import { useState } from 'react'
import authService from '../../../services/auth.services'





const LogIn = () => {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginInfo)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
            })
            .catch(err => console.log(err))
    }



    return (
        <div>

            <Form onSubmit={handleSubmit}>


                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Access</Button>
                </div>

            </Form>

        </div>
    )
}

export default LogIn