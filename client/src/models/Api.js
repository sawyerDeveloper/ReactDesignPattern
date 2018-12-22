import axios from 'axios'

class Api {

    constructor() {
        this.data = {}
    }

    apiGet = (route, container, callback) => {

        axios.get(route)
            .then((response) => {
                this.setData(container, response.data)
                callback(this.getData(container))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    apiPost = (route, body, callback) => {

        axios.post(route, body)
            .then((response) => {
                callback(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    apiPut = (route, body, callback) => {
        axios.post(route, body)
            .then((response) => {
                callback(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    apiDelete = (route, callback) => {
        axios.delete(route)
            .then((response) => {
                callback(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    deleteData = (container) => {
        delete this.data[container]
    }

    setData = (container, data) =>{
        this.data[container] = data
        return data
    }

    getData = (container) => {
        console.log(this.data)
        return this.data[container] ? this.data[container] : null
    }

}

export default Api

