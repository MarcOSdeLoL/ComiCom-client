import './MyDetails.css'

import userService from '../../../services/user.services'
import LoadingButton from '../../basicComponents/LoadingButton/LoadingButton'
import { useEffect, useState, useContext } from 'react'
import { Card, Row, Col, Modal } from 'react-bootstrap'
import { AuthContext } from '../../../contexts/auth.context'
import EditUserForm from '../EditUserForm/EditUserForm'

const UserDetails = () => {

    const [currentUser, setCurrentUser] = useState({})
    const [showModal, setShowModal] = useState(false)

    const { user } = useContext(AuthContext)


    useEffect(() => {
        loadUser()
    }, [])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const loadUser = () => {
        userService
            .getOneUser(user._id)
            .then(({ data }) => setCurrentUser(data))
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        closeModal()
        loadUser()
    }


    return (
        <div>

            {
                !currentUser ?
                    <LoadingButton /> :
                    <>

                        <div>
                            <Row>
                                <Col md={4} className="userDetails">
                                    <div className="profilePicture" style={{ backgroundImage: `url(${currentUser.avatar})` }}>
                                    </div>
                                </Col>
                                <Col md={8} style={{ textAlign: 'left' }}>
                                    <div className="userDetails-header">
                                        <h1>{currentUser.username}</h1>
                                        <svg onClick={openModal} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </div>
                                    <h5>{currentUser.email}</h5>
                                    <p>{currentUser.description}</p>
                                </Col>
                            </Row>

                        </div>





                        <Modal show={showModal} onHide={closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit your profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <EditUserForm fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>
                    </>
            }

        </div >


    )

}

export default UserDetails

