import { useState } from "react";



export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // e.preventDefault();
    // Handle login logic
  };

  return (
    <>
    <div className="login-con-master">
      <div className="login-banner"></div>
      <div className="centered-login">
        <form className="login-form">
            <h1 className="login-heading">Get Started with WGUPS OMS</h1>
            <p>Welcome to WGUPS OMS! To get started, log in by entering your username and password.</p>
            <div>
              <label><p>Username</p></label>
              <input type="email"className="form-input-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
              <label><p>Password</p></label>
              <input type="password" className="form-input-control" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            <button className="btn form-btn-control">Login</button>
        </form>
      </div>
    </div>
    </>
  );
}
