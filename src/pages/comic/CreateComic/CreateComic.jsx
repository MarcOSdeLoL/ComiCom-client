import './CreateComic.css'
import { Container } from 'react-bootstrap'
import CreateComicForm from '../../../components/Comic/CreateComicForm/CreateComicForm'

const CreateComic = () => {

    return (

        <Container >

            <h1>Create new Comic</h1>

            <hr />

            <CreateComicForm />


        </Container>

        )
    }

    export default CreateComic