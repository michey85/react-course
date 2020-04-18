import React, { useEffect } from 'react';
import User from './User';

const UserList = ({ users = [], old = false, loading = false }) => {
    if (loading) {
        return <h1>Данные загружаются</h1>;
    }

    if (users.length === 0) {
        return <div className='emptyResult'>Нет результатов</div>;
    }

    return (
        <div className='user-list'>
            {users
                .filter((user) => (old ? user.id < 32360438 : true))
                .map((user) => (
                    <User
                        key={user.id}
                        name={user.login}
                        url={user.html_url}
                        img={user.avatar_url}
                    />
                ))}
        </div>
    );
};

export default UserList;
