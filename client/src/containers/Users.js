import React, { Component } from 'react'
import User from '../components/users/User'
import Model from '../models/Users'

class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

        this.model = new Model(props.api)

    }

    componentDidMount() {
        this.model.getUsers((users) => { this.setState({ users })})
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
                <h1>Users:</h1>
                {this.state.users &&
                    this.state.users.map((user) => {
                        return (<User user={user} key={user._id}/>)
                    })
                }
            </div>
        )
    }
}

export default Users
