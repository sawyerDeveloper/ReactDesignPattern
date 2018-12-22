import axios from 'axios'

class Api {

    constructor() {
        this.data = []
    }

    getData = (callback) => {

        axios.get('/api/data/')
            .then((response) => {
                this.data = response.data
                callback(this.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

}

export default Api
