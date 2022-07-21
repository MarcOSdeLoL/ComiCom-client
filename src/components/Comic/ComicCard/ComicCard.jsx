import './ComicCard.css'
import { Card,Button } from 'react-bootstrap'

const ComicCard = () => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://1.bp.blogspot.com/-mmUHTTVDg2Y/XifcfqkA5QI/AAAAAAAALLw/jFlYZ3mp6jQBFSpNHqp0z-lW-QeiZ7ikACLcBGAsYHQ/s2346/Spider-Man-minimal.jpg" />
            <Card.Body>
                <Card.Title>Comic Title</Card.Title>
                <Card.Text>
                    Cosas de mutantes, superhéroes y cosas del palo.
                </Card.Text>
                <Button variant="primary" href="/comicDetails">Detalles del cómic</Button>
            </Card.Body>
        </Card>
    )
}
export default ComicCard