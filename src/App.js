import React from 'react';
import ReactDOM from 'react-dom';
import Clicker from './Clicker';
import ClickerFn from './ClickerFn';

const App = () => {
    return (
        <div className='myApp'>
            <ClickerFn />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
