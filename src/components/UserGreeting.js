import React, { Component } from 'react';

class UserGreeting extends Component {

    state = {
        isLoggedIn: false
    }

    render() {
        return this.state.isLoggedIn ? <h1>Welcome Nabendu</h1> : <h1>Welcome Guest</h1>
    }
}

export default UserGreeting;