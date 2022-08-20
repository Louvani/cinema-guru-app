import axios from 'axios';
import { useState } from 'react';
import Button from '../../components/general/Button';

import Login from './Login';
import Register from './Register';

import './auth.css';
import { URL_API } from '../../App';


function Authentication({setIsLoggedIn, setUserUsername}) {
    const [_switch, set_switch] = useState(true)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState(false)

    const btnClick = (event) => {
        const id = event.target.getAttribute('id')
        id === 'signUp' ? set_switch(false) : set_switch(true)
    }

    const handleSubmit = (onSubmit) => {
        onSubmit.preventDefault();
        if (_switch) {
            axios.post(
            `${URL_API}/api/auth/login`,
            {username, password},
            {
              headers: {
                'Content-Type': 'application/json',
              },
            })
            .then((res) => res.data)
            .then((data) => {
              setIsLoggedIn(true);
              setUserUsername(data.username)
              localStorage.setItem('accessToken', data.accessToken);
            })
            .catch((error) => console.log(error))
        } else {
            axios.post(
            `${URL_API}/api/auth/register`,
            {username, password},
            {
                headers: {
                'Content-Type': 'application/json',
                },
            })
            .then((res) => res.data)
            .then((data) => {
                setIsLoggedIn(true);
                setUserUsername(data.username)
                localStorage.setItem('accessToken', data.accessToken);
            })
            .catch((error) => console.log(error))
        }
    }
    return(
        <form className='form' onSubmit={handleSubmit}>
            <div className='header-auth'>
                <Button label={'button'} className={_switch ? 'btn-light' : 'btn-dark'} onClick={btnClick} text={'Sing In'} id={'signIn'} />
                <Button label={'button'} className={_switch ? 'btn-dark' : 'btn-light'} onClick={btnClick} text={'Sing up'} id={'signUp'} />
            </div>
            <div className='body-auth'>
                {_switch ? (
                    <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
                    ) : (
                    <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
                )}
            </div>
        </form>
    )
}

export default Authentication;
