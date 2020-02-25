import React, { Component } from 'react'

class AddMessage extends Component {
    state = {
        sentAt: '',
        content: '',
        senderName: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addMessages(this.state);
        this.setState({sentAt: '',
                       content: '',
                       senderName: '',  
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
                           />
                    <input type ="text" 
                           name ="content"
                           placeholder="content" 
                           value={this.state.content}
                           onChange={this.onChange}
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