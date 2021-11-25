import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';

function App() {
  const [isDark, toggleDark] = useState(true);

  return (
    <div className={isDark ? "app-dark" : "app-light"}>
      <Toggle onClick={() => toggleDark(!isDark)} />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome <code>human</code>. Login to display your information.
      </p>
      <button
        className="login-button"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Login
      </button>



    </div>
  );
}

export default App;
