import React, { Component, useState } from 'react';

import Dumb from './DumpComponent.jsx';
import HookExample from './TestHook.jsx';

const initialState = {
    firstname: 'Bob',
    lastname: 'Leponge',
    books: [
        'Bob Leponge à la plage',
        'Bob Leponge à la ferme'
    ]
}

class Smart extends Component {
    constructor() {
        super();

        this.state = initialState;

        this.myRef = React.createRef();
    }

    componentDidMount() {
        // const newState = Object.assign({}, this.state, {firstname: 'Harvey'});
        const newState = { ...this.state, firstname: 'Harvey', lastname: 'Specter' };
        this.setState(newState);

        var {a, b} = () => { return {a: 2, b: 3}; };
    }


    render() {
        

        return (
            <div>
                <h2>Smart</h2>
                <Dumb haha={'haha'} />
                {this.state.firstname + ' ' + this.state.lastname}
                <ul>
                {this.state.books.map((book, index) => {
                    return (
                        <li key={index}>{book}</li>
                    );
                })}
                </ul>
                <HookExample />
                <div ref={this.myRef}>Ref</div>
                <button onClick={() => console.log(this.myRef.current)}>Click ref</button>
            </div>
        );
    }
}

export default Smart;