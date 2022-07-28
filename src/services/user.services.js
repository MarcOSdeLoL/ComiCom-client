import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getFavs() {
        return this.api.get(`/my-favComics`)
    }

    addFavs(comic_id) {
        return this.api.put(`/${comic_id}/favComics`)
    }

    removeFavs(comic_id) {
        return this.api.put(`/${comic_id}/RemoveFavComic`)
    }

    getAllUsers() {
        return this.api.get('/allUsers')
    }

    getOneUser(user_id) {
        return this.api.get(`/${user_id}/details`)
    }

    editUser(user_id, userData) {
        return this.api.put(`/edit/${user_id}`, userData)
    }

}

const userService = new UserService()

export default userService