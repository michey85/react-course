import React, { useState } from 'react';

const Search = ({ placeholder, cb, old, setLoading }) => {
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const isChecked = (e) => {
        old(e.target.checked);
    };

    const getData = () => {
        setLoading(true);
        fetch(`https://api.github.com/search/users?q=${search}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);

                cb(result.items);
                setLoading(false);
            });
    };

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            getData();
        }
    };

    return (
        <div>
            <input
                type='search'
                placeholder={placeholder}
                value={search}
                onChange={onChange}
                onKeyDown={handleKey}
            />
            <button onClick={getData}>Найти</button>
            <br />
            <label>
                Old users only
                <input type='checkbox' onChange={isChecked} />
            </label>
        </div>
    );
};

export default Search;
