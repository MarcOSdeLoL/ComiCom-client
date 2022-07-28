import './ComicsListPage.css'

import comicService from '../../../services/comic.services'
import ComicList from '../../../components/Comic/ComicList/ComicList'
import LoadingButton from '../../../components/basicComponents/LoadingButton/LoadingButton'

import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'



const ComicsListPage = () => {

    const [comics, setComics] = useState(null)

    useEffect(() => {
        callComics()
    }, [])

    const callComics = () => {

        comicService
            .getAllComics()
            .then(({ data }) => {
                setComics(data)
            })
            .catch(err => console.error(err))
    }

    return (

        <Container>

            <h1>All the comics!</h1>
            <br />
            {comics
                ?
                (comics.length ? <ComicList comics={comics} callComics={callComics} /> : <h6>No hay comics</h6>)
                :
                <LoadingButton />
            }

        </Container>


    )
}

export default ComicsListPage