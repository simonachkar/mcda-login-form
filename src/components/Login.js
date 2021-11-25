import './Login.css';

function Login() {
    return (
        <div className="login-form">
            <form action="#!" id="main">
                <p>Enter your information</p>

                <div class="input-parent">
                    <label for="username">Name</label>
                    <input type="text" id="name" />
                </div>

                <div class="input-parent">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>

                <div class="input-parent">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>

                <button type="submit">Login</button>
            </form>

        </div>
    );
}

export default Login;
