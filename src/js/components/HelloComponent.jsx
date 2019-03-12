import React, { Component } from "react";
import ReactDOM from "react-dom";

import Input from "./Input.jsx";

class HelloComponent extends Component {
    constructor() {
        super();

        this.state = {
            name: "Bob"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log("handleChange");
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <form>
                    <Input
                        text="Nom"
                        label="nom"
                        type="text"
                        id="nom"
                        value={this.state.name}
                        handleChange={this.handleChange} />
                </form>
            </div>            
        );
    }
}

export default HelloComponent;