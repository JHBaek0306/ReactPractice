import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

// interface HeaderProps {
//     isDark: boolean;
// }

const Header = () => {
    const { isDark } = useContext(ThemeContext);

    return (
        <header
            className='header'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}>
            <h1>Welcome Gildong</h1>
        </header>
    )
}

export default Header;