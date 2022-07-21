import './Navigation.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {

    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">ComiCom</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/signUp">Register</Nav.Link>
                        <Nav.Link href="/logIn">Log In!</Nav.Link>

                        <NavDropdown title="My space" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/usersList">List of ComiCommies</NavDropdown.Item>
                            <NavDropdown.Item href="/userDetails">User´s Details</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="/logOut">
                                Sayonara, Baby!
                            </NavDropdown.Item> */}
                        </NavDropdown>
                        <NavDropdown title="Comics" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/comicsList">All the comics!</NavDropdown.Item>
                            <NavDropdown.Item href="/createComic">Create Comic</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation