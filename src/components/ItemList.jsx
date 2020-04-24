import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { goods, buyHandler } = this.props;

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
                            isOrdered={good.isOrdered}
                            buyHandler={buyHandler}
                        />
                    ))
                )}
            </div>
        );
    }
}

export default ItemList;
