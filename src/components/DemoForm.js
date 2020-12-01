import React, { Component } from 'react';

class DemoForm extends Component {

    state = {
        username: '',
        comment: '',
        language: 'react'
    }
    
    handlerUserChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handlerCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }
    handlerLangChange = event => {
        this.setState({
            language: event.target.value
        })
    }
    handlerSubmit = event => {
        event.preventDefault();
        console.log(`Name: ${this.state.username}\nComment: ${this.state.comment}\nLanguage: ${this.state.language}`);
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handlerUserChange} />
                </div>
                <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handlerCommentChange} />
                </div>
                <div>
                    <label htmlFor="language">Language</label>
                    <select id="language" value={this.state.language} onChange={this.handlerLangChange}>
                        <option value="reactnative">React Native</option>
                        <option value="swift">Swift</option>
                        <option value="flutter">Flutter</option>
                        <option value="python">Python</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm;