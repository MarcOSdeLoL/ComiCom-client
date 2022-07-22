import './Navigation.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/">
                <Navbar.Brand as="span">ComiCom</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/signUp">
                        <Nav.Link as="span">Register</Nav.Link>
                        </Link >
                        <Link to="/logIn">
                        <Nav.Link as="span">Log In!</Nav.Link>
                        </Link>

                        <NavDropdown title="My space" id="basic-nav-dropdown">
                            <Link to="/usersList">
                            <NavDropdown.Item as="span">List of ComiCommies</NavDropdown.Item>
                            </Link>
                            <Link to="/userDetails/:user_id">
                            <NavDropdown.Item as="span">User´s Details</NavDropdown.Item>
                            </Link>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="/logOut">
                                Sayonara, Baby!
                            </NavDropdown.Item> */}
                        </NavDropdown>
                        <NavDropdown title="Comics" id="basic-nav-dropdown">
                            <Link to="/comicsList">
                            <NavDropdown.Item as="span">All the comics!</NavDropdown.Item>
                            </Link>
                            <Link to="/createComic">
                            <NavDropdown.Item as="span">Create Comic</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navigation