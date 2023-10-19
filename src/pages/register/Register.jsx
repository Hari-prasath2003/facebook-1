import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Facebook</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>

        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Name" className="registerInput" />
            <input placeholder="E-mail" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <input placeholder="Password Again" className="registerInput" />
            <button className="registerButton">
              <Link to="/login">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
