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
        return this.api.get('/allComics')
    }

    getHostComics(user_id) {
        console.log('estoy en el servicioooo', user_id)
        return this.api.get(`/allHostComics/${user_id}`)
    }

    getMyComics() {
        return this.api.get('/my-comics')
    }

    getOneComic(comic_id) {
        return this.api.get(`/${comic_id}/details`)
    }

    editComic(comic_id, comicData) {
        return this.api.put(`/${comic_id}/edit`, comicData)
    }

    deleteComic(comic_id) {
        return this.api.delete(`/${comic_id}/delete`)
    }

    setAsAvailableComic(comic_id) {
        return this.api.put(`/${comic_id}/setAvailable`)
    }

    setAsUnavailableComic(comic_id) {
        return this.api.put(`/${comic_id}/setUnavailable`)
    }

    setNewComicOwner(comic_id) {
        return this.api.put(`/${comic_id}/adopt`)
        // modificar el owner + forSale: false
    }
}

const comicService = new ComicService()

export default comicService