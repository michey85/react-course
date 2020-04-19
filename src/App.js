import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ItemList from './components/ItemList';
import Basket from './components/Basket';
import { goods } from './data/goods';

const App = () => {
    const [orderedItems, setOrder] = useState([]);

    const buyHandler = (item) => {
        setOrder([...orderedItems, item]);
    };

    return (
        <>
            <Basket items={orderedItems} buyHandler={setOrder} />
            <ItemList goods={goods} buyHandler={buyHandler} />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
