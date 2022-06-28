import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const LOGIN_URL = '/auth';

const Login = () => {
    const { auth, setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log('from:', from)

    useEffect(() => {

        setTimeout(() => {
            setAuth({ user: 'qqwerty', roles: [1984] });
            navigate(from, { replace: true }) }
            , 2000)
        
        
        // setAuth({ user, pwd, roles, accessToken });
    }, [])

    return (

        <section>
            ... doing login ...
        </section>

    )
}

export default Login