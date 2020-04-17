import React from 'react';

export default function CV({ name, profession, spec, photo }) {
    return (
        <div className='my-4'>
            {photo && (
                <img src={photo} alt='' width='200' className='img-thumbnail' />
            )}
            <h1 className='h1'>{name}</h1>
            <h2 className='h2'>{profession}</h2>
            <h2 className='h5'>{spec}</h2>
        </div>
    );
}
