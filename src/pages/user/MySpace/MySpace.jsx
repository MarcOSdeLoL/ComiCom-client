import './MySpace'
import UserFavs from '../../../components/User/UserFavs/UserFavs'
import MyDetails from '../../../components/User/MyDetails/MyDetails'

const MySpace = () => {
    return (
        <>
            <h1>My Space</h1>
            <br />
            <hr />
            <h2>Detalles de usuario</h2>
            <MyDetails />
            <br />
            <h3>mis comics</h3>
            <br />
            <h3>Mis favoritos (lista)</h3>
            <UserFavs />
        </>
    )
}

export default MySpace