import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import CV from './CV';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './layout/Footer';
import Photo from './img/photo.jpg';

const App = () => {
    return (
        <>
            <Header />
            <div className='container' style={{ marginTop: '4rem' }}>
                <h1 className='h1'>Our Team</h1>
                <CV
                    name='John Doe'
                    profession='Web-dev'
                    spec='ReactJs'
                    photo={Photo}
                />
                <CV name='Michael Green' profession='Web-dev' spec='VueJs' />
                <CV name='Anna Doe' profession='Web-dev' spec='AngularJs' />
            </div>
            <Footer />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
