import React, { Component } from 'react'
import Post from '../components/posts/Post'
import Model from '../models/Posts'

class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }

        this.model = new Model(props.api)

    }

    componentDidMount() {
        this.model.getPosts((posts) => { this.setState({ posts })})
    }

    componentWillUnmount(){
        this.model.deleteData()
    }

    render() {

        const styles = {
            container: {
                width: '100%',
                height: '100%'
            }
        }

        return (
            <div style={styles.container}>
                <h1>Posts:</h1>
                {this.state.posts &&
                    this.state.posts.map((post) => {
                        return (<Post post={post} key={post._id}/>)
                    })
                }
            </div>
        )
    }
}

export default Posts
