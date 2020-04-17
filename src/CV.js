import React from 'react';

export default function CV({ name, profession, spec }) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{profession}</h2>
            <h2>{spec}</h2>
        </div>
    );
}
