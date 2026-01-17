import { Link } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
        </form>

        <div className="auth-footer">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
