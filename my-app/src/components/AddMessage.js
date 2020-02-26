import React, { Component } from 'react'

const d = new Date

class AddMessage extends Component {
    state = {
        sentAt: d.toISOString(),
        content: '',
        senderName: 'Guest User'
    }   
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addMessages(this.state);
        this.setState({content: ''});  
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label className= "lable">
                        <textarea type ="text" 
                                  name ="content"
                                  placeholder = "Type message"
                                  value={this.state.content}
                                  onChange={this.onChange}
                                  className="field"
                                  />                
                        <input type='submit'
                               value="Send"
                               className="submit"               
                               />
                    </label>
                </form>                          
            </div>
        )
    }
}
export default AddMessage 