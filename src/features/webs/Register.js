import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync, selectUsername, selectStatus, selectError } from './registerSlice';


const Register = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [superuser, setSuperuser] = useState(false);
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [msg, setMsg] = useState('');
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const userName = useSelector(selectUsername);

  const handleSubmit = () => {
    dispatch(registerAsync({ username, email, password, superuser , first_name,last_name}));
  };

  return (
    <div>
      Register
      <hr />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {status === 'loading' && <p>Registering...</p>}
      {status === 'success' && <p style={{ color: 'green' }}>{userName} registered successfully!</p>}
      <form onSubmit={handleSubmit}>
        User name:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <br />
         First Name:
        <input
          type="text"
          value={first_name}
          onChange={(e) => setfirst_name(e.target.value)}
        />
        <br />
        Last Name:
        <input
          type="text"
          value={last_name}
          onChange={(e) => setlast_name(e.target.value)}
        />
        <br />
        Admin:
        <input
          type="checkbox"
          checked={superuser}
          onChange={(e) => setSuperuser(e.target.checked)}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
