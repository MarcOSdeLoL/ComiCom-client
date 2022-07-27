import './FavList.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FavList = ({ myFavs, loadMyFavs }) => {

    console.log('???', myFavs)


    return (

        <div>
            {myFavs.map(fav => {

                return (
                    <Link to={`/comicDetails/${fav._id}`} key={fav._id} > {fav.title}</Link>
                )
            })}
        </div >
    )
}

export default FavList