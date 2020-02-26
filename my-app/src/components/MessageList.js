import React, { Component } from 'react'
import Message from "./Message"

class MessageList extends Component {
  state = {
    currentPage: 1,
    messagesPerPage: 3
  };

  changePage (e) {
    this.setState({ currentPage: Number(e.target.id)}); 
  } 
  
  render() {
    const { currentPage, messagesPerPage } = this.state;

    // Logic to determine the messages to be displayed on the current page
    const lastMessageIndex = currentPage * messagesPerPage;
    const firstMessageIndex = lastMessageIndex - messagesPerPage;
    const currentMessages = this.props.messages.slice(firstMessageIndex, lastMessageIndex);
   
    // Logic for the page number listing
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.messages.length / messagesPerPage); i++) {
      pageNumbers.push(i);
    }
    return (    
      <div>
        <div className = "sortContainer">  
          <button onClick={this.props.doToggleSort.bind(this)} className = "btnSort">
            {this.props.sortStrategy === "ascending" ? " Newest First" : " Oldest First"}
          </button> 
        </div>
        <div className ="pagesContainer">
          {pageNumbers.map(number => {
              return (
                <li className = {"pages " + (this.state.currentPage === number ? "selected" : "")}
                    key={number}
                    id={number}
                    onClick={this.changePage.bind(this)}>{number}
                </li>
              );
            })            
          }
        </div>
        <div>
          {currentMessages.map((message, i)=> {
                     return <Message key = {i}
                            message =  {message}
                            delMessage={this.props.delMessage} />   
            })                 
          }
        </div>
      </div>     
    )
  }
}
export default  MessageList;