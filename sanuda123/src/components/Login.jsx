import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate(); // ✅ Use navigate to redirect
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
 
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3030/login", loginData);
     if (response.status === 200) {
       navigate("/blpage"); // ✅ Redirect to blank page after login
      }
      alert("Login successful!");
      console.log("Token:", response.data.token);
      
    } catch (error) {
      alert("Login failed: " + error.response.data.error);
    }
  };

  return (
    <div className="login-page" style={{ backgroundColor: "#0D1B2A", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="card" style={{ width: "600px", backgroundColor: "#1B263B", color: "white", borderRadius: "12px", padding: "20px" }}>
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6" style={{ textAlign: "center", padding: "20px" }}>
          <img
  src="https://i.pinimg.com/736x/b4/3a/80/b43a804b0baa7e22ab28730a1f364c9d.jpg"
  alt="ChemQuest Illustration"
  style={{
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px"
  }}
/>

            <h2>Welcome to ChemQuest!</h2>
            <p>Don't have an account?</p>
            <Link to="/register" className="btn btn-warning" style={{ fontWeight: "bold", marginTop: "10px" }}>Create an Account</Link>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
            <h2 className="text-center mb-4">Log In to Your Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ fontWeight: "bold" }}>Email</label>
                <input type="email" id="email" placeholder="Enter Email" name="email" className="form-control" value={loginData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label" style={{ fontWeight: "bold" }}>Password</label>
                <input type="password" id="password" placeholder="Enter Password" name="password" className="form-control" value={loginData.password} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 