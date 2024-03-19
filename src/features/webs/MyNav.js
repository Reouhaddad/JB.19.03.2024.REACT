import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {  selectlogged , logout,selectUsername} from './loginSlice';
const MyNav = () => {
  const logged = useSelector(selectlogged);
  const username = useSelector(selectUsername)
  const dispatch = useDispatch();
  return (
    <div>
      
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Logo</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><Link to="/Prod">Prods</Link></li>
              <li><Link to="/Register">not register ?</Link></li>
              <li><a href="#">Contact</a></li>
              {logged && <li><div style={{ color: "red" }}><h3>{username}</h3></div></li>}
            </ul>
            <ul className="nav navbar-nav navbar-right">
            {!logged ?<li><Link to="/Login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            :
            <li><Link to="/Login"><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>}
            </ul>
          </div>
        </div>
      </nav>
      </div>
   
  )
}

export default MyNav