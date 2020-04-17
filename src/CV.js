import React from 'react';

export default function CV({ name, profession, spec }) {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, profession),
        React.createElement('h2', {}, spec),
    ]);
}
