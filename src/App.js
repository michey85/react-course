import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import CV from './CV';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './layout/Footer';
// import Photo from './img/photo.jpg';

const App = () => {
    const data = [
        { name: 'John Doe', prof: 'Webdev', spec: 'ReactJs' },
        { name: 'Sam Smith', prof: 'Webdev', spec: 'VueJs' },
        { name: 'Anna Dowson', prof: 'Webdev', spec: 'AngularJs' },
    ];

    const [state, setState] = useState(data);

    const clickHandler = () => {
        setState([
            ...data,
            { name: 'Anna Dowson 2', prof: 'Webdev', spec: 'AngularJs' },
        ]);
    };

    return (
        <>
            <Header />
            <div className='container' style={{ marginTop: '4rem' }}>
                <h1 className='h1'>Our Team</h1>
                {state.map((person) => (
                    <CV
                        key={person.name}
                        name={person.name}
                        profession={person.prof}
                        spec={person.spec}
                    />
                ))}
                <button onClick={clickHandler}>Button</button>
            </div>
            <Footer />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
