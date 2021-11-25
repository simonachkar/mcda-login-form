import { useState, useRef, useContext } from 'react'
import { Navigate } from "react-router-dom"
import './Login.css';
import UserContext from '../context';

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [hometown, setHometown] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const nameEl = useRef(null);
    const emailEl = useRef(null);
    const hometownEl = useRef(null);

    const { user, loginUser } = useContext(UserContext)

    const submitForm = () => {
        if (!name || name.length < 3) {
            nameEl.current.focus();
            setErrorMessage("Name is empty or invalid")
        } else if (!email || email.length < 3) {
            emailEl.current.focus();
            setErrorMessage("Email is empty or invalid")
        } else if ((!hometown || hometown.length < 3)) {
            hometownEl.current.focus();
            setErrorMessage("Hometown is empty or invalid")
        } else {
            setErrorMessage("")
            // console.log(name, email, hometown)
            const user = {
                name,
                email,
                hometown
            }
            loginUser(user)
        }
    }

    if (user) {
        return <Navigate to="/" />;
    }

    return (
        <div className="login-form">
            <div id="main">
                <p>Enter your information</p>

                <div class="input-parent">
                    <label for="name">Name</label>
                    <input
                        ref={nameEl}
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div class="input-parent">
                    <label for="email">Email</label>
                    <input
                        ref={emailEl}
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div class="input-parent">
                    <label for="hometown">Hometown</label>
                    <input
                        ref={hometownEl}
                        type="text"
                        id="hometown"
                        value={hometown}
                        onChange={(e) => setHometown(e.target.value)}
                    />
                </div>

                <p style={{ color: 'red', fontWeight: 'bold', fontSize: 'small', textAlign: 'center' }}>{errorMessage}</p>

                <button onClick={() => submitForm()}>Enter</button>
            </div>

        </div>
    );
}

export default Login;
