import './Navigation.css'

import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth.context'

const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)

    const logout = () => { logoutUser() }

    return (

        <Navbar bg="light" expand="lg" fixed="top"
        >
            <Container>
                <Link to="/">
                    <Navbar.Brand as="span">ComiCom</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {user ?
                            <Nav.Link as="span">Welcome {user.username}</Nav.Link>
                            :
                            <>
                                <Link to="/signUp">
                                    <Nav.Link as="span">Register</Nav.Link>
                                </Link >
                                <Link to="/logIn">
                                    <Nav.Link as="span">Log In!</Nav.Link>
                                </Link>
                            </>}

                        <NavDropdown title="My Space" id="basic-nav-dropdown">
                            
                            <Link to="/myComics">
                                <NavDropdown.Item as="span">My Comics</NavDropdown.Item>
                            </Link>
                            <Link to="/mySpace">
                                <NavDropdown.Item as="span">My Profile</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as="span" onClick={logout}>
                                Sayonara, Baby!
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="The Comic-unity" id="basic-nav-dropdown">
                            <Link to="/usersList">
                                <NavDropdown.Item as="span">List of ComiCommies</NavDropdown.Item>
                            </Link>
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