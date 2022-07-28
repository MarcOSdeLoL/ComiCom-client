import './LogIn.css'
import  {Container, Row, Col} from 'react-bootstrap'
import LoginForm from '../../../components/basicComponents/LoginForm/LoginForm'



const LogIn = () => {

    
    return (

        <Container className='fondo'>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Please, LogIn!</h1>

                    <hr />

                    <LoginForm />

                </Col>
            </Row>

        </Container>


       
    )
}

export default LogIn