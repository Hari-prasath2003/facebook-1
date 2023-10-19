import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>

          <span className="loginDesc">Click Photo</span>

          <div className="loginUser">
            <img
              className="loginUserImg"
              src="assets/person/Jiso.jpg"
              alt="auth user"
            />
            <div className="loginUserName">Jiso</div>
          </div>
        </div>

        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">
              <Link to="/home">Sign In</Link>
            </button>

            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              <Link to="/register">Create a New Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
