import './MyComicListPage.css'

import comicService from '../../../services/comic.services'
import ComicList from '../../../components/Comic/ComicList/ComicList'
import LoadingButton from '../../../components/basicComponents/LoadingButton/LoadingButton'

import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'



const MyComicListPage = () => {

    const [myComics, setMyComics] = useState([])

    useEffect(() => {
        callMyComics()
    }, [])

    const callMyComics = () => {
        comicService
            .getMyComics()
            .then(({ data }) => setMyComics(data))
            .catch(err => console.error(err))
    }

    return (

        <Container>

            <h1>My comics!</h1>
            <br />
            {myComics.length ? <ComicList comics={myComics} callMyComics={callMyComics} /> : <LoadingButton />}

        </Container>

    )
}

export default MyComicListPage