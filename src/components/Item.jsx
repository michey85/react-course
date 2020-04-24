import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, price, isOrdered, buyHandler } = this.props;

        return (
            <div className='goods__item'>
                <img
                    src={`https://via.placeholder.com/150?text=${name}`}
                    alt={name}
                />
                <h2 className='goods__itemTitle'>{name}</h2>
                <h3 className='goods__itemPrice'>{price} рублей</h3>
                <button
                    className='buy'
                    onClick={() => buyHandler({ name, price })}
                    disabled={isOrdered}
                >
                    Купить
                </button>
            </div>
        );
    }
}

export default Item;
