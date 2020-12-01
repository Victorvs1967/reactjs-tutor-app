import React, { Component } from 'react';

import ChildLifeycle from './ChildLifeycle';

class ParentLifecycle extends Component {

    state = {
        name: 'ParentLifecycle'
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ParentLifecycle getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate() {
        console.log('ParentLifecycle shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('ParentLifecycle getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('ParentLifecycle componentDidUpdate');
    }

    componentDidMount() {
        console.log('ParentLifecycle componentDidMount');
    }

    render() {
        console.log('ParenLifectycle render');
        return (
            <>
                <h1>ParentLifecycle</h1>
                <button onClick={() => this.setState({name: 'TheWebDev'})}>Change State</button>
                <ChildLifeycle />
            </>
        );
    }
}

export default ParentLifecycle;