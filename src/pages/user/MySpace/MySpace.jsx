import './MySpace.css'
import UserFavs from '../../../components/User/UserFavs/UserFavs'
import MyDetails from '../../../components/User/MyDetails/MyDetails'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MyComicListPage from '../MyComicsListPage/MyComicListPage'

const MySpace = () => {
    return (
        <Container className="MySpace">
            <Row >
                <h1>My Space</h1>
                <br />
            </Row>
            <Row >

                <h2 >ComiCommie´s details</h2>
                <hr />

            </Row>
            <MyDetails />
            <br />

            <Row>

                <Col md={9}>
                    <h3>My Collection</h3>
                    <hr />
                    <MyComicListPage />
                </Col>

                <Col md={3}>
                    <h3>My Favs</h3>
                    <hr />

                    <UserFavs />
                </Col>

            </Row>

        </Container >
    )
}

export default MySpace