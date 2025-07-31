import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function TeacherLogins() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message before request
    try {
      const response = await axios.post("http://localhost:3030/teacherlogins", loginData);

      if (response.status === 200) {
        alert("✅ Login successful!");
        console.log("Token:", response.data.token);

        // Store token & user info in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userRole", "teacher");

        // Redirect teacher to the chat page
        navigate("/teacher-chat");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "❌ Login failed. Please try again.");
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundColor: "#0D1B2A",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="card"
        style={{
          width: "600px",
          backgroundColor: "#1B263B",
          color: "white",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6 text-center p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995547.png"
              alt="Teacher Illustration"
              style={{ width: "150px", height: "150px", objectFit: "cover", marginBottom: "10px" }}
            />
            <h2>Welcome, Teacher!</h2>
            <p>New here?</p>
            <Link to="/teacherregister" className="btn btn-warning fw-bold mt-2">
              Register as a Teacher
            </Link>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
            <h2 className="text-center mb-4">Teacher Login</h2>

            {errorMessage && (
              <div className="alert alert-danger p-2 text-center">{errorMessage}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  className="form-control"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  name="password"
                  className="form-control"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success w-100 mb-3">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherLogins;