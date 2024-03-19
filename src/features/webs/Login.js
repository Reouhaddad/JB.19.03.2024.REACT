import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, selectlogged , selectUsername , logout} from './loginSlice';
import { Link } from "react-router-dom";

const Login = () => {
    const logged = useSelector(selectlogged);
    const dispatch = useDispatch();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [msg, setmsg] = useState("")
    const userName = useSelector(selectUsername);
    


    return (
        <div>Login
            <hr />
            {!logged && <div style={{ color: "red" }}><h1>{msg}</h1></div>}
            {logged && <div style={{ color: "green" }}><h1>{userName}</h1></div>}
            {!logged ? <div>
                User name<input onChange={(e) => setusername(e.target.value)} />
                password:<input onChange={(e) => setpassword(e.target.value)} />
                <button onClick={() => dispatch(loginAsync({ username, password }))}>Login</button><br></br>
                <a><Link to="/Register">not register ?</Link></a>
            </div>
            :
            <div>Press the button to logout : <button onClick={() => dispatch(logout())}>Logout</button></div>}
        </div>
    )
}

export default Login