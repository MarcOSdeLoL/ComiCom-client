import './MySpace'
import UserFavs from '../../../components/User/UserFavs/UserFavs'
import MyDetails from '../../../components/User/MyDetails/MyDetails'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MySpace = () => {
    return (
        <>
        <Container>
            <Row >
            <h1>My Space</h1>
            <br />
            </Row>
            <hr />
            <Row >

            <h2 >ComiCommie´s details</h2>
            </Row>
            <MyDetails />
            <br />
                <h3>My Collection</h3>
                <Link to={`/myComics`}>

                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16">
                            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                        </svg>
                    
                </Link>
            <br />
            <h3>My Favs</h3>
            <UserFavs />

        </Container>
        </>
    )
}

export default MySpace