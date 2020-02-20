import React, { Component } from 'react'

class Message extends Component {
    render() {

    const {content, senderUuid, messageId} = this.props.message;

    const betterDateFormat = (new Date(this.props.message.sentAt)).toDateString()


        return (

       <div>
        <div> 
            <button onClick={this.props.delMessage.bind(this,messageId)}>Delete
            </button>                        
          </div>  



        <div>
            <ul>
                <li>{betterDateFormat}</li>
                <li>messageId: {this.props.message.messageId}</li>
                <li>content: {this.props.message.content}</li>
                <li>senderId: {this.props.message.senderId}</li>
                <li>roomId: {this.props.message.roomId}</li>
                <li>{""}</li>
            </ul>
         </div>

        </div>
        )
    }
}
export default Message;