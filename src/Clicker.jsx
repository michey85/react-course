import React, { Component } from 'react';

export default class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        const { count } = this.state;
        return (
            <button onClick={() => this.setState({ count: count + 1 })}>
                {count}
            </button>
        );
    }
}
