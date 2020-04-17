import React from 'react';
import ReactDOM from 'react-dom';
import CV from './CV';

const App = () => {
    return (
        <div>
            <h1 className='h1'>Our Team</h1>
            <CV name='John Doe' profession='Web-dev' spec='ReactJs' />
            <CV name='Michael Green' profession='Web-dev' spec='VueJs' />
            <CV name='Anna Doe' profession='Web-dev' spec='AngularJs' />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
