import { Row, Col } from 'react-bootstrap'
import ComicCard from '../ComicCard/ComicCard'
import './ComicList.css'

const ComicList = ({ comics, callComics }) => {

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

