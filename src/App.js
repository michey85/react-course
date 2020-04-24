import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ItemList from './components/ItemList';
import Basket from './components/Basket';
import { goods } from './data/goods';

class App extends Component {
    constructor() {
        super();
        this.state = {
            orderedItems: [],
            goods: goods,
        };
    }

    render() {
        const buyHandler = (item) => {
            this.setState({
                orderedItems: [...this.state.orderedItems, item],
                goods: [
                    ...this.state.goods.map((good) => {
                        if (good.name === item.name) {
                            return {
                                ...good,
                                isOrdered: true,
                            };
                        } else {
                            return good;
                        }
                    }),
                ],
            });
        };

        const removeHandler = (name) => {
            const newOrder = this.state.orderedItems.filter(
                (item) => item.name !== name
            );
            this.setState({ orderedItems: [...newOrder] });
        };

        return (
            <>
                <Basket
                    items={this.state.orderedItems}
                    removeHandler={removeHandler}
                />
                <ItemList goods={this.state.goods} buyHandler={buyHandler} />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
