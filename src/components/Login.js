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
    return <p>You are logged in!</p>
  }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type='text' id='username' onChange={(e)=>setUserName(e.target.value)}/>
                <br />
                <label htmlFor="password">Password:</label>
                <input type='text' id='password' onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <button id='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Login;
