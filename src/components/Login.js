import { useState, useRef } from 'react'
import './Login.css';

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [hometown, setHometown] = useState("");

    const usernameEl = useRef(null);

    const submitForm = () => {
        console.log(name, email, hometown)
    }

    return (
        <div className="login-form">
            <form action="#!" id="main">
                <p>Enter your information</p>

                <div class="input-parent">
                    <label for="name">Name</label>
                    <input
                        ref={usernameEl}
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div class="input-parent">
                    <label for="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div class="input-parent">
                    <label for="password">Hometown</label>
                    <input
                        type="text"
                        id="hometown"
                        value={hometown}
                        onChange={(e) => setHometown(e.target.value)}
                    />
                </div>

                <button type="submit" onClick={() => submitForm()}>Enter</button>
            </form>

        </div>
    );
}

export default Login;
