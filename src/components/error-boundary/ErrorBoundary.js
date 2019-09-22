import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
        this.setState({ error });
    }

    render () {
        if (this.state.error) {
            return(
                <div>
                    <p>We're sorry - something's gone wrong.</p>
                </div>
            )
        } else {
            return this.props.children;
        }
    }
}