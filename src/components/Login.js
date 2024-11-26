import React, { useState } from 'react';

const Login = ({ isLoggedIn, onLogin }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

const handleSubmit = (e)=>{
    e.preventDefault();
    if(username && password){
        onLogin();
    }else{
        alert('All* the field is required');
    }
}

if(isLoggedIn){
    return <h2>You are Logged In!</h2>
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type='text' id='username' onChange={(e)=>setUserName(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type='text' id='password' onChange={(e)=>setPassword(e.target.value)}/>
                <button id='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Login;
