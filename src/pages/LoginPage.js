import React from 'react';
import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";

const LoginPage = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);


    return (
        <div>
            <form className="login">
                <h1>Login</h1>
                <input type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <button>Login</button>
            </form>

        </div>
    );
};

export default LoginPage;