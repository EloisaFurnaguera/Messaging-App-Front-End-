import React, { Component } from 'react'

class Message extends Component {
    render() {
    const {sentAt, senderName, content} = this.props.message;
    const betterDateFormat = (new Date(sentAt)).toDateString()
        return (
       <div className="container ">
        <div> 
            <button className="btnDel"  
                    onClick={this.props.delMessage.bind(this,sentAt,content)}>Delete
            </button>                        
        </div>  
        <div>     
            <ul>            
                <li className="userName " >{senderName} <span className= "time">{betterDateFormat}</span> </li>
                <li>{this.props.message.content}</li>                 
            </ul>       
         </div>
        </div>
        )
    }
}
export default Message;