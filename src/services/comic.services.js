import axios from 'axios'

class ComicService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/comic`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    createComic(comicData) {
        return this.api.post('/create', comicData)
    }

    getAllComics() {
        return this.api.get('allComics')
    }
}

const comicService = new ComicService()

export default comicService