import React, { Component, createRef } from 'react';

class Input extends Component {

    inputRef = createRef();

    focusInput = () => this.inputRef.current.focus();

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }

}

export default Input;
