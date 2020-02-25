import React, { Component } from 'react'

class Message extends Component {
    render() {
    const {content, senderName, messageId} = this.props.message;
    const betterDateFormat = (new Date(this.props.message.sentAt)).toDateString()
        return (
       <div className="container ">
        <div> 
            <button className="btnDel"  
                    onClick={this.props.delMessage.bind(this,messageId)}>Delete
            </button>                        
        </div>  
        <div>     
            <ul>            
                <li className="userName content" >{senderName} <span className= "time">{betterDateFormat}</span> </li>
                <li>{this.props.message.content}</li>                 
            </ul>       
         </div>
        </div>
        )
    }
}
export default Message;