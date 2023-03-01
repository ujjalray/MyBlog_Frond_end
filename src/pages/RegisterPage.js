import React from 'react';
import { useState } from "react";

import axios from 'axios';

const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const RegisterFun = () => {

        axios.post('http://localhost:4000/register', {
            username: username,
            password: password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
       
     
    }




    return (
        <div>

            <div className="register" >

                <h1>Register</h1>
                <input type="text"
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}

                />

                <input type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />

                <button onClick={RegisterFun}>Register</button>

            </div>

        </div>
    );
};

export default RegisterPage;