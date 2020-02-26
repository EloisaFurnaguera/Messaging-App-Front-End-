import React, { Component } from 'react'


const d = new Date

class AddMessage extends Component {
    state = {
        sentAt: d.toISOString(),
        content: '',
        senderName: ''
    }
   
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addMessages(this.state);
        this.setState({
                       content: '',
                       senderName: '' 
        });
    
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type ="text" 
                           name ="senderName"
                           placeholder="Name" 
                           value={this.state.senderName}
                           onChange={this.onChange}
                           className="field"
                           />
                    <input type ="text" 
                           name ="content"
                           placeholder="content" 
                           value={this.state.content}
                           onChange={this.onChange}
                           className="field"
                           />

                    <input type='submit'
                           value="Submit"
                        />
              
                </form>               
            </div>
        )
    }
}
export default AddMessage 