import axios from 'axios'

class ComicService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/comic`
        })

    }

    createComic(comicData) {
        return this.api.post('/create', comicData)
    }
}

const comicService = new ComicService()

export default comicService