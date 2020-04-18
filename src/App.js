import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import UserList from './components/UserList';

const App = () => {
    const [users, setUsers] = useState([]);
    const [isOld, setIsOld] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Search
                placeholder='Введите запрос'
                cb={setUsers}
                old={setIsOld}
                setLoading={setLoading}
            />
            <UserList users={users} old={isOld} loading={loading} />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
