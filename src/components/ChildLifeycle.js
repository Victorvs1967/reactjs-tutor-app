import React, { Component } from 'react';

class ChildLifeycle extends Component {

    state = {
        name: 'ChildLifecycle'
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ChildLifeycle getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('ChildLifeycle componentDidMount');
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

    render() {
        console.log('ChildLifeycle render');
        return <h2>ChildLifecycle</h2>
    }
}

export default ChildLifeycle;