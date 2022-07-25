import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/basic/HomePage/HomePage"
import SignUp from "../pages/basic/SignUp/SignUp"
import LogIn from "../pages/basic/LogIn/LogIn"
import UsersList from "../pages/user/UsersList/UsersList"
import UserDetails from "../pages/user/UserDetails/UserDetails"
import ComicsListPage from "../pages/comic/ComicsListPage/ComicsListPage"
import ComicDetails from "../pages/comic/ComicDetails/ComicDetails"
import CreateComic from "../pages/comic/CreateComic/CreateComic"
import EditComicPage from "../pages/comic/ComicEditPage/ComicEditPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/usersList" element={<UsersList />} />
            <Route path="/userDetails/:user_id" element={<UserDetails />} />
            <Route path="/comicsList" element={<ComicsListPage />} />
            <Route path="/comicDetails/:comic_id" element={<ComicDetails />} />
            <Route path="/createComic" element={<CreateComic />} />
            <Route path="/editComic/:comic_id" element={<EditComicPage />} />

        </Routes>
    )
}

export default AppRoutes