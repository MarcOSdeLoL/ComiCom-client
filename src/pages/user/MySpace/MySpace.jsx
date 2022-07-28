import './MySpace'
import UserFavs from '../../../components/User/UserFavs/UserFavs'
import UserDetails from '../../../components/User/UserDetails/UserDetails'

const MySpace =() => {
    return (
        <>
        <h1>My Space</h1> 
        <br />
        <h2>Imagen del usuario</h2>
        <hr />
        <h2>Detalles de usuario</h2>
        <UserDetails/>
        <br />
        <h3>mis comics</h3>
        <br />
        <h3>Mis favoritos (lista)</h3>  
        <UserFavs/>    
        </>
    )
}

export default MySpace