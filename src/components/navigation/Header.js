import './navigation.css'

import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Header({ userUsername, setIsLoggedIn }) {
    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false)
    }
    return(
        <header className='header'>
            <h3>Cinema Guru</h3>
            <nav className='nav'>
                <img src='https://picsum.photos/100/100' alt='icon'></img>
                <p className='.nav-item'>Welcome, { userUsername }!</p>
                <span className='.nav-item' onClick={logout}>
                <FontAwesomeIcon icon={faSignOut} /> Logout
                </span>
            </nav>
        </header>
    )
}

export default Header;
