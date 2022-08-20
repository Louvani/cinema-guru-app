import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import './auth.css'

const btnClick = (event) => {
    console.log("hey")
}

function Login ({username, password, setUsername, setPassword}) {

    return(
        <div className='login-container'>
            <h2>Sign in with your account</h2>
            <Input
                label={'Username'}
                type={'text'}
                className={'input-light'}
                value={username}
                setValue={setUsername}
                icon={faUser}
                inputAttributes={{ color: 'icon--red-dark', size: 'sm', for: 'username' }}  />
            <Input
                label={'Password'}
                type={'password'}
                className={'input-light'}
                value={password}
                setValue={setPassword}
                icon={faKey}
                inputAttributes={{ color: 'icon--red-dark', size: 'sm', for: 'password' }} />
            <Button icon={faKey} label={'submit'} text={'Sign In'} className={'btn-dark'} onClick={btnClick} />
        </div>
    )
}

export default Login;
