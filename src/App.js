import React from 'react';
import ReactDOM from 'react-dom';
import CV from './CV';

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Hello from React'),
        React.createElement(CV, {
            name: 'John Doe',
            profession: 'Web-developer',
            spec: 'ReactJs',
        }),
        React.createElement(CV, {
            name: 'Michael Grenn',
            profession: 'Web-developer',
            spec: 'VueJs',
        }),
        React.createElement(CV, {
            name: 'Tom Ince',
            profession: 'Web-developer',
            spec: 'AngularJs',
        }),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
