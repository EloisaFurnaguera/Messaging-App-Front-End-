import React, { Component } from 'react'

class Message extends Component {
    render() {

 
    const betterDateFormat = (new Date(this.props.message.sentAt)).toDateString()


        return (
        <div>
            <ul>
                <li>{betterDateFormat}</li>
                <li>{this.props.message.messageId}</li>
                <li>{this.props.message.content}</li>
                <li>{this.props.message.senderId}</li>
                <li>{this.props.message.roomId}</li>
                <li>{""}</li>
            </ul>
         </div>
        )
    }
}
export default Message;