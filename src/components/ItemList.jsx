import React from 'react';
import Item from './Item';

const ItemList = ({ goods, buyHandler }) => {
    return (
        <div className='goods'>
            {!goods.length ? (
                <h2>Товаров нет</h2>
            ) : (
                goods.map((good) => (
                    <Item
                        key={good.name}
                        name={good.name}
                        price={good.price}
                        buyHandler={buyHandler}
                    />
                ))
            )}
        </div>
    );
};

export default ItemList;
