import React, { Component } from 'react';

class BasketItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, price, deleteHandler } = this.props;

        return (
            <div className='basket__item'>
                <h2 className='basket_itemTitle'>{name}</h2>
                <h4 className='basket__itemPrice'>{price}</h4>
                <button
                    className='basket__itemDelete'
                    onClick={() => deleteHandler(name)}
                >
                    X
                </button>
            </div>
        );
    }
}

export default BasketItem;
