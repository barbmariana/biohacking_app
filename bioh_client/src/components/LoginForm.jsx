import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

const LoginForm = () => {
        const [username, setUsername] = useState('');
        const [password, setUserPassword] = useState('');
        const { handleSignIn } = useContext(AuthContext);

        
        const handleUser = (e) =>
        {
                setUsername(e.target.value);
        }

        const handlePass = (e) => 
        {
                setUserPassword(e.target.value);
        }
        const handleButton = (e) => 
        {
                e.preventDefault();
                handleSignIn(username, password);
        }
  return (
    <div>
        <h1>BIOH LOGIN</h1>
        <form onSubmit={handleButton}>
                <label htmlFor="username">Username: </label>
                <input type="username" id="userName" name='userName' placeholder="Username" onChange={handleUser} value={username}/>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" placeholder="Password" onChange={handlePass} value={password}/>
                <button type="submit">Login</button>
                <h3>Do not have an account?</h3>
                <button type="button"> <Link path="/signup"> Create New Account </Link></button> 
        </form>
    </div>
  )
}

export default LoginForm