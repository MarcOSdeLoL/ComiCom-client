import './FavList.css'
import { Link } from 'react-router-dom'

const FavList = ({ myFavs, loadMyFavs }) => {

    return (

        <div>
            {myFavs.map(fav => {

                return (
                    <>
                    <Link className="favList"to={`/comicDetails/${fav._id}`} key={fav._id} > {fav.title}</Link>
                    <br />
                    </>
                )
            })}
        </div >
    )
}

export default FavList