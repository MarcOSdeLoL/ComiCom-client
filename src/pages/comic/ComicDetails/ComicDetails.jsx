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
                console.log(data, 'desde useefect')
            })
            .catch(err => console.error(err))
    }, [])

    return (

        <div>

            {
                // !comic ? 
                // <LoadingButton/> :
                <>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://www.zoom-comics.com/wp-content/uploads/sites/36/2013/02/spider-man-eyes.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                
                                <Card.Title> <h1>{comic.title}</h1>ESTE ES EL TÍTULO DE LA VAINA</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </>
            }

        </div>





    )
}

export default ComicDetails