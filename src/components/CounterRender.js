import React, { Component } from 'react';

class CounterRender extends Component {
    state = {
        count: 0
    }
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        return (
            <>
                {this.props.render(this.state.count, this.incrementCount)}
            </>
        )
    }
}

export default CounterRender;
