import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';
import AlertContext from '../context/alert/alertContext';
import { Link } from "react-router-dom";
import FormNav from "../common/FormNav";
import '../common/AuthForm.css'

export default function Login(props) {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/dashboard');
        }

        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            login({
                email,
                password
            });
        }
    };

    return (
        <div className="form-Container">
            <FormNav />
            <form onSubmit={onSubmit}>
                <h2>Welcome Back!</h2>
                <fieldset>
                    <legend>Log In</legend>
                    <ul>
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={email}
                                onChange={onChange} required />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" name='password'
                                value={password}
                                onChange={onChange} required />
                        </li>
                        <li>
                            <i />
                            {/* <a href="#">Forgot Password?</a> */}
                        </li>
                    </ul>
                </fieldset>
                <button type='submit' >Login</button>
                <Link to="/register"><div>Create an Account</div></Link>
            </form>
        </div>
    )
}

