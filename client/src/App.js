import React, { Component } from 'react'
import Users from './containers/Users'
import Posts from './containers/Posts'
import Api from './models/Api'

const containers = {
  USERS: 'Users',
  POSTS: 'Posts'
}
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentContainer: containers.USERS
    }

    this.api = new Api()
  }

  setContainer = (event) => {
    this.setState({
      currentContainer: event.target.value
    })
  }

  render() {

    const styles = {
      container: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }

    let container
    switch(this.state.currentContainer){
      case containers.POSTS :
        container = <Posts api={this.api}/>
      break
      case containers.USERS :
        container = <Users api={this.api}/>
      break
      default:
        container = <Users api={this.api}/>
      break
    }

    return (
      <div style={styles.container}>
        <button value={containers.USERS} onClick={this.setContainer}>Users</button>
        <button value={containers.POSTS} onClick={this.setContainer}>Posts</button>
        {container}
      </div>
    )
  }
}

export default App
