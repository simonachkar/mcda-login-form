import { useState, useRef } from 'react'
import './Login.css';

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [hometown, setHometown] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const nameEl = useRef(null);
    const emailEl = useRef(null);
    const hometownEl = useRef(null);

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
            console.log(name, email, hometown)
        }
    }

    return (
        <div className="login-form">
            <form id="main">
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

                <button type="submit" onClick={() => submitForm()}>Enter</button>
            </form>

        </div>
    );
}

export default Login;
