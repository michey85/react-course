import React, { Component } from 'react';

export default class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log('Компонент смонтировался');
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps);
        // console.log(prevState);

        console.log(`Было ${prevState.count}, стало ${this.state.count}`);
    }

    render() {
        const { count } = this.state;
        return (
            <>
                <button onClick={() => this.setState({ count: count - 1 })}>
                    -
                </button>
                <span className='count'>{count}</span>
                <button onClick={() => this.setState({ count: count + 1 })}>
                    +
                </button>
            </>
        );
    }
}
