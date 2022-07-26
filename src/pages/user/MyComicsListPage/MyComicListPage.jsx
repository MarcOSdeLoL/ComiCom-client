import './MyComicListPage.css'

import comicService from '../../../services/comic.services'
import ComicList from '../../../components/Comic/ComicList/ComicList'
import LoadingButton from '../../../components/basicComponents/LoadingButton/LoadingButton'

import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'



const MyComicListPage = () => {

    const [comics, setComics] = useState([])

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

            <h1>My comics!</h1>
            <br />
            {
                    comics.length ? <ComicList comics={comics} callComics={callComics} /> : <LoadingButton />
                
            }

        </Container>


    )
}

export default MyComicListPage