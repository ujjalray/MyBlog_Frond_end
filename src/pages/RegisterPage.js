import React from 'react';
import { useState } from "react";

const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div>

            <form className="register" >

                <h1>Register</h1>
                <input type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}

                />

                <input type="email" 
                    placeholder="Email"
                    value={username}
                    onChange={e => setUsername(e.target.value)}

                />

                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button>Register</button>


            </form>

        </div>
    );
};

export default RegisterPage;