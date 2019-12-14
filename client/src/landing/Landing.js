import React from 'react';
import { Link } from 'react-router-dom'
import background from "./asset/survellian.svg"
import Button from '../common/button/Button'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <nav className="nav">
        <ul className="nav-ul">
          <li>atomz</li>
          <div className="nav-ul--item2">
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </div>
        </ul>
      </nav>
      <header className="landing-header">
        <div className="landing-textBlock">
          <h2 className="heading--main">
            Our common responsibility is to keep each other safe. 
          </h2>
          <div className="heading--sub">...Let's Keep an eye on one another</div>
          <div className="landing-btnGrp">
            <Link to="/emergency_list"><Button name="Report to an authority" color="red" />  </Link>
            {/* <Link to="/login"><Button name="Login" color="#3acc6c" /> </ Link>  */}
          </div>
        </div>
        <div className="landing-Container">
          <img src={background} className="landing-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default Landing;
