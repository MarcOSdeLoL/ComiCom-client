import './Navigation.css'

import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth.context'

const Navigation = () => {
//ojo a este user
    const { user, logoutUser} = useContext(AuthContext)

    const logout = () => { logoutUser() }

    return (

        <Navbar bg="light" expand="lg" 
        // fixed="top"
        >
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
                            <Link to="/userDetails/${user._id}">
                            <NavDropdown.Item as="span">User´s Details</NavDropdown.Item>
                            </Link>
                            <Link to="/myComics">
                                <NavDropdown.Item as="span">My Comics</NavDropdown.Item>
                            </Link>
                            <Link to="/mySpace">
                                <NavDropdown.Item as="span">My Space</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as="span" onClick={logout}>
                                Sayonara, Baby!
                            </NavDropdown.Item>
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