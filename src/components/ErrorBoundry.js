import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    // render (){
    //     if (this.state.hasError) {
    //         return <h1>Oops, something went wrong...</h1>
    //     }
    //     return this.props.children
    // }
    render (){
       return (this.state.hasError) ?
            <h1>Oops, something went wrong...</h1> :
        ( this.props.children );
    } // another way of expressing the IF statement
}


export default ErrorBoundry;