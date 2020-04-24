import React, { Component } from 'react';
import BasketItem from './BasketItem';

class Basket extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items, removeHandler } = this.props;

        return (
            <div className='basket'>
                {!items.length ? (
                    <h2>Корзина пуста</h2>
                ) : (
                    <div className='basket__items'>
                        {items.map((item) => (
                            <BasketItem
                                key={item.name}
                                name={item.name}
                                price={item.price}
                                deleteHandler={removeHandler}
                            />
                        ))}
                        <p className='basket__sum'>
                            Общая стоимость заказа:{' '}
                            <b>
                                {items.reduce((acc, item) => {
                                    return item.price + acc;
                                }, 0)}
                            </b>
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default Basket;
