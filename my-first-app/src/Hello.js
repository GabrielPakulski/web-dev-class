import React, { Component } from "react";
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className="f2 tc">
                <h1> Hello world!!! </h1>
                <p> Welcome to React, {this.props.greeting}!</p>
                <p> This is another paragraph.</p>
            </div>
        );

    }
}

export default Hello;