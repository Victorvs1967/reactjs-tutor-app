import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromProps(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        return this.state.hasError ? <h1 style={{color: 'red'}}>SomeThing Went wrong</h1> : this.props.children;
    }
}

export default ErrorBoundary;