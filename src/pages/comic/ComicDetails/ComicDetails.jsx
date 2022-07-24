import './ComicDetails.css'
import { Card } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import comicService from '../../../services/comic.services'
import { useEffect, useState } from 'react'
import LoadingButton from '../../../components/basicComponents/LoadingButton/LoadingButton'


const ComicDetails = () => {

    const [ comic, setComic ] = useState({})
    const { comic_id } = useParams()


    useEffect(() => {

        comicService
            .getOneComic(comic_id)
            .then(({ data }) => {
                setComic(data)
            })
            .catch(err => console.error(err))
    }, [])

    return (

        <div>

            {
                !comic ? 
                <LoadingButton/> :
                <>
                        <Card className="bg-dark text-white 18rem">
                    <Card.Img src={comic.cover} alt="Card image"/>
                    <Card.ImgOverlay>
                
                                <Card.Title> <h1>{comic.title}{comic.number}</h1></Card.Title>
                        <Card.Text>
                            {comic.pages} pages
                        </Card.Text>
                            
                        <Card.Text>Add year here</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </>
            }

        </div>
    )
}

export default ComicDetails