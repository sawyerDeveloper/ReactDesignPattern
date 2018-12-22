import React, { Component } from 'react'
import DataRenderer from './containers/DataRenderer'
import Api from './api/Api'
class App extends Component {

  constructor(props){
    super(props)
    this.api = new Api()
  }
  render() {

    const styles = {
      container: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }
    return (
      <div style={styles.container}>
        <DataRenderer api={this.api}/>
      </div>
    )
  }
}

export default App
