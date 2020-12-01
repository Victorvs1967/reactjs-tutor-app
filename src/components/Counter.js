import { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    }

    incrementCount() {
        this.setState(prevState => ({count: prevState.count + 1}));
    }
    incrementFiveTimes() {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }

    style = {
                marginTop: 10,
                padding: '10px 20px 10px 20px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '16px',
                fontWeight: 700,
                backgroundColor: 'orange'
            };

    render() {
        return (
            <>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.incrementCount()} style={this.style}>increment</button>
            </>
        );
    }
}

export default Counter;