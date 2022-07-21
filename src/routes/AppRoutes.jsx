import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/basic/HomePage/HomePage"
import SignIn from "../pages/basic/SignIn/SignIn"
import LogIn from "../pages/basic/LogIn/LogIn"
import UsersList from "../pages/user/UsersList/UsersList"
import UserDetails from "../pages/user/UserDetails/UserDetails"
import ComicsList from "../pages/comic/ComicsList/ComicsList"
import ComicDetails from "../pages/comic/ComicDetails/ComicDetails"
import CreateComic from "../pages/comic/CreateComic/CreateComic"


const AppRoutes = () => {

    return (
        <Routes>            
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signIn" element={<SignIn />}></Route>
            <Route path="/logIn" element={<LogIn />}></Route>
            <Route path="/usersList" element={<UsersList />}></Route> 
            <Route path="/userDetails" element={<UserDetails />}></Route>
            <Route path="/comicsList" element={<ComicsList />}></Route>
            <Route path="/comicDetails" element={<ComicDetails />}></Route>
            <Route path="/createComic " element={<CreateComic />}></Route>
        </Routes>
    )
}

export default AppRoutes