import { createContext } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext();

function Auth({children}) {
    const navigate = useNavigate();

    const handleSignIn = async (username, password) => {
        try {
            const response = await axios({
                method: 'post',
               //Put your sigin api in the url
                url: 'http://localhost:3001/user/login',
                data: {
                    username: `${username}`,
                    password: `${password}`
                }
            })
            sessionStorage.setItem('token', response.data.token)
            navigate("/dashboard");
        } catch (e) {
            console.log(e)
        }

    }

    const handleLogout = () => {
        sessionStorage.clear()
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ handleSignIn, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )

}

export default Auth;
