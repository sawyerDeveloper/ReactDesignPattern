class Users {

    constructor(api) {
        this.api = api

        //Just for convenience
        this.name = this.constructor.name 
    }

    getUsers = (callback) => {

        //This data we want to persist for whatever reason so we load it once and pull it from memory
        const data = this.api.getData(this.name)

        if(data){
            callback(data)
            return
        }

        this.api.apiGet('/api/users/', this.name, (users) => {

            //mutate data here once and save it to the model - not within a react component class
            callback(this.api.setData(this.name, users.reverse()))
        })
    }

}

export default Users