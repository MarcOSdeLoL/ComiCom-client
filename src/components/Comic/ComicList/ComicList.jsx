import './ComicList.css'
import { Row, Col } from 'react-bootstrap'
import ComicCard from '../ComicCard/ComicCard'

const ComicList = ({ comics, callComics }) => {

    console.log('&&&&&&&&', comics)


    return (

        <Row>
            {comics.map(comic => {

                // WHAT DA HELL IS THIS KEY?
                return (

                    <Col md={3} key={comic._id} >
                        <ComicCard {...comic} callComics={callComics} />
                    </Col>
                )
            })}

        </Row>
    )
}

export default ComicList

