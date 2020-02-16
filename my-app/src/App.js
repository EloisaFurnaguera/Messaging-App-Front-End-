import React, { Component } from 'react'
import Header from './components/Header'
import MessageList from './components/MessageList'
import data from './data.json'
import './App.css';


class App extends Component {
  state ={
    messages : data.messages 
  }


  render() {
    return (
      <div>
      <Header />
      <MessageList messages={this.state.messages} />
      </div>
    
    )
  }
}
export default App;