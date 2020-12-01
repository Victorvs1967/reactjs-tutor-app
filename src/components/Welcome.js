import { Component } from 'react';

class Welcome extends Component {

    render() {
        const { name, children } = this.props
        return (
            <>
                <h3>Welcome to the world, {name}.</h3>
                <p>{children}</p>
            </>
        );
    }
}

export default Welcome;