class Posts {

    constructor(api) {
        this.api = api

        //Just for convenience
        this.name = this.constructor.name 
    }

    getPosts = (callback) => {
        this.api.apiGet('/api/posts/', this.name, (posts) => {
            //NOTE: Mutate data here once - not within a react component class.
            //We are loading this data fresh each time so we do this mutation each time this function is called.
            posts.sort((a, b) => {
                const aDate = new Date(a.posted).getTime()
                const bDate = new Date(b.posted).getTime()
                return aDate - bDate
            })
            callback(posts)
        })
    }

    deleteData = () => {
        this.api.deleteData(this.name)
    }

}

export default Posts