import React from 'react';

const Header = () => {
    return (
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
            <a className='navbar-brand' href='!#'>
                Navbar
            </a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarsExampleDefault'
                aria-controls='navbarsExampleDefault'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div
                className='collapse navbar-collapse'
                id='navbarsExampleDefault'
            >
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <a className='nav-link' href='!#'>
                            Home <span className='sr-only'>(current)</span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='!#'>
                            Link
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='!#'>
                            Disabled
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
