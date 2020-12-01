import React, { Component } from 'react';

import ChildComponent from './ChildeComponent';

class ParentComponent extends Component {

    state = {
        parentName: 'Robin hood Sr.'
    }
    greetParent = childName => {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    };

    render() {
        return (
            <ChildComponent greetHandler={this.greetParent} />
        );
    }
}

export default ParentComponent;
