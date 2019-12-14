import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/authContext';

import { Link } from "react-router-dom";
import FormNav from "../common/FormNav";
import '../common/AuthForm.css'

export default function Register(props) {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    password2: ''
  });

  const { userName, phoneNumber, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (userName === '' || email === '' || password === '' || phoneNumber === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        userName,
        phoneNumber,
        email,
        password
      });
    }
  };
  return (
    <div className="form-Container">
      <FormNav />
      <form onSubmit={onSubmit}>
        <h2>Sign Up!</h2>
        <fieldset>
          <legend>Create Account</legend>
          <ul>
          <li>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name='email'
                value={email}
                onChange={onChange} required />
            </li>
            <li>
              <label htmlFor="userName">User Name:</label>
              <input type="text" id="userName" name='userName'
                value={userName}
                onChange={onChange} required />
            </li>
            <li>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="phone" id="phoneNumber" name='phoneNumber'
                value={phoneNumber}
                onChange={onChange} required  minLength='6'/>
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password"  name="password" value={password}
                onChange={onChange} required />
            </li>
            <li>
              <label htmlFor="password2">Confirm Password:</label>
              <input type="password" id="password2" name='password2'
                value={password2}
                onChange={onChange} required  minLength='6'/>
            </li>
          </ul>
        </fieldset>
        <button type='submit'>Submit</button>
        <Link to="/login"><div >Have an Account?</div></Link>
      </form>
    </div>
  )
}
