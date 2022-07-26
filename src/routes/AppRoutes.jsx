import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/basic/HomePage/HomePage"
import SignUp from "../pages/basic/SignUp/SignUp"
import LogIn from "../pages/basic/LogIn/LogIn"
import UsersListPage from "../pages/user/UsersListPage/UsersListPage"
import ComicsListPage from "../pages/comic/ComicsListPage/ComicsListPage"
import ComicDetails from "../pages/comic/ComicDetails/ComicDetails"
import CreateComic from "../pages/comic/CreateComic/CreateComic"
import EditComicPage from "../pages/comic/ComicEditPage/ComicEditPage"
import MyComicListPage from "../pages/user/MyComicsListPage/MyComicListPage"
import MySpace from "../pages/user/MySpace/MySpace"
import UserDetails from "../pages/user/UserDetails/UserDetails"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/usersList" element={<UsersListPage />} />
            <Route path="/usersDetails/:user_id" element={<UserDetails />} />
            <Route path="/comicsList" element={<ComicsListPage />} />
            <Route path="/comicDetails/:comic_id" element={<ComicDetails />} />
            <Route path="/createComic" element={<CreateComic />} />
            <Route path="/editComic/:comic_id" element={<EditComicPage />} />
            <Route path="/myComics" element={<MyComicListPage />} />
            <Route path="/mySpace" element={<MySpace />} />
        </Routes>
    )
}

export default AppRoutes