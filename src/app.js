import React, { Component } from 'react'
import ReactDom from 'react-dom'

class App extends Component {
  render() {
    return(
      <div>
        This is the REACT APP!!
      </div>
    )
  }
}

ReactDOM.react(<App />, document.getElementById('app'))