import { useState } from 'react'
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './Home.css';
import Toggle from './Toggle';

const Home = () => {
    const [isDark, toggleDark] = useState(true);
    return (
        <div className={isDark ? "app-dark" : "app-light"}>
            <Toggle onClick={() => toggleDark(!isDark)} />
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome <code>human</code>. Login to display your information.
            </p>
            <Link to="/login" className="login-button">Login</Link>
        </div>
    );
}

export default Home;
