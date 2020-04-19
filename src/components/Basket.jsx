import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({ items, buyHandler }) => {
    console.log(items);

    const deleteItem = (name) => {
        const newOrder = items.filter((item) => item.name !== name);
        buyHandler([...newOrder]);
    };

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
                            deleteHandler={deleteItem}
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
};

export default Basket;
