import React, { Component, createRef } from 'react';

class RefsDemo extends Component {

    inputRef = createRef()

    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }
    clickHandler = () => console.log(`User input: "${this.inputRef.current.value}"`);
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;
