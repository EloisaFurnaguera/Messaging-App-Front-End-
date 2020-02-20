import React, { Component } from 'react'

class Message extends Component {
    render() {

    const {content, senderUuid, messageId} = this.props.message;

    const betterDateFormat = (new Date(this.props.message.sentAt)).toDateString()


        return (

       <div className="container ">
        <div> 
            <button className="btnDel"  
                    onClick={this.props.delMessage.bind(this,messageId)}>Delete
            </button>                        
          </div>  



        <div>
        <span className= "time">{betterDateFormat}</span>  
            <ul>
                
      
                <li>content: {this.props.message.content}</li>
                <li>senderId: {this.props.message.senderId}</li>

                <li>{""}</li>
            </ul>
         </div>

        </div>
        )
    }
}
export default Message;