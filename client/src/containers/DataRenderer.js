import React, { Component } from 'react'
import User from '../components/User'

class DataRenderer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.props.api.getData((data) => { this.setState({ data }) })
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
                Users:
                {this.state.data &&
                    this.state.data.map((user) => {
                        return (<User user={user} key={user._id}/>)
                    })
                }
            </div>
        )
    }
}

export default DataRenderer
