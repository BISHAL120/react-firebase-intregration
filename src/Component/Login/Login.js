import React from 'react';
import './Login.css';
import useFirebase from '../../Hook/useFirebase';


const Login = () => {
    const {singinwithgoogle} = useFirebase();

    return (
        <div>
            <h1>Please Login</h1>
            <div className='btn'>
                <button onClick={singinwithgoogle}>Google Sing In</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Email' /> <br />
                <input type="password" name="" id="" placeholder='password' /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;