import React, { Component } from 'react';
// import PureComp from './PureComp';
// import RegularComponent from './RegularComponent';
import MemoComp from './MemoComp';

class ParentComp extends Component {

    state = {
        name: 'Nabendu'
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: ' Nabendu'
            })
        }, 2000)
    }

    render() {
        console.log('***********************');
        console.log('Parent Component Render');
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <RegularComponent name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp;
