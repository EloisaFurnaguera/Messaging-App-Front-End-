import React, { Component } from 'react'
import Message from "./Message"

class MessageList extends Component {



    render() {
        return (
            <div>
               

                <div>
                 { this.props.messages.map((message, i)=> {
                     return <Message key = {i}
                            message =  {message}/>
                 })
                  
                 }
                </div>


            </div>
        )
    }
}
export default  MessageList;