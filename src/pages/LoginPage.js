import React from 'react';
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const LoginPage = () => {

      const [username,setUsername] = useState('');
      const [password,setPassword] = useState('');
      const [redirect,setRedirect] = useState(false);
      

    const LoginFun = async () => {

        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
     
    }

    if (redirect) {

        return <Navigate to={'/'} />
        
    }



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
                <button onClick={LoginFun()}>Login</button>
            </form>

        </div>
    );
};

export default LoginPage;