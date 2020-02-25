import React, { Component } from 'react'
import Header from './components/Header'
import MessageList from './components/MessageList'
import AddMessage from './components/AddMessage'
import data from './data.json'
import './App.css';


class App extends Component {
  state ={
    messages : data.messages,
    sortStrategy: "ascending"
  }

  doToggleSort = () => {
    if (this.state.sortStrategy === "ascending"){
      this.setState({
        sortStrategy: "descending",
        messages: this.state.messages.sort((a, b) => new Date(b.sentAt) - new Date(a.sentAt))
      })
    } else {
      this.setState({
        sortStrategy: "ascending",
        messages: this.state.messages.sort((a, b) => new Date(a.sentAt) - new Date(b.sentAt))
      })
    }
  }

  delMessage = (messageId) => {    
    this.setState({ messages: [...this.state.messages.filter(message => message.messageId !== messageId)] });   
  }

  addMessages = (message) =>{
    const newMessage = {
      sentAt: '',
      messageId: '',
      content: message.content,
      senderId: '',
      senderName: message.senderName,
      roomId: "1"
    }
    this.setState({ messages: [...this.state.messages, newMessage]});
    
  }


  render() {

   
    return (
      <div>
        <Header />
        <MessageList messages={this.state.messages} 
                    sortStrategy={this.state.sortStrategy}
                    doToggleSort={this.doToggleSort}
                    delMessage={this.delMessage}
                    />
          <AddMessage addMessages={this.addMessages}/>
      </div>
    
    )
  }
}
export default App;