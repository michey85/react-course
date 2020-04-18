import React from 'react';

const User = ({ name, url = '', img = '' }) => {
    return (
        <div className='user'>
            <h1>{name}</h1>
            <img src={img} alt='' width='100' />
            <br />
            <a href={url}>Страничка пользователя</a>
        </div>
    );
};

export default User;
