import React from 'react';

const BasketItem = ({ name, price, deleteHandler }) => {
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
};

export default BasketItem;
