import './LogIn.css'
import { Form, Button } from "react-bootstrap"




const LogIn = () => {

    return (
        <div>

            <Form onSubmit={handleSubmit}>


                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Acceder</Button>
                </div>

            </Form>

        </div>
    )
}

export default LogIn