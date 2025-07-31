import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


function Register() {
  const [values, setValues] =useState({
    name:'',
    email:'',
    password:''
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:3030/register", values);
      alert(response.data.message); // ✅ Success message
    } catch (error) {
      console.error("❌ Registration error:", error.response.data);
      alert("Error: " + error.response.data.error); // ❌ Show error message
    }
  };
  
  //const [formData, setFormData] = useState({
   // name: "",
    //email: "",
    //password: "",
  //});

 // const handleChange = (e) => {
   // setFormData({
  //    ...formData,
   //   [e.target.name]: e.target.value,
   // });
  //};

  //const handleSubmit = (e) => {
   // e.preventDefault();
   // console.log(formData);
  //};

  return (
    <div
      className="register-page"
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
          width: "800px",
          backgroundColor: "#1B263B",
          color: "white",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <div className="row">
          {/* Left Side */}
          <div
            className="col-md-6"
            style={{ textAlign: "center", padding: "20px" }}
          >
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
            <p>Already have an account?</p>
            <Link
              to="/login"
              className="btn btn-warning"
              style={{ fontWeight: "bold", marginTop: "10px" }}
            >
              Log In
            </Link>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
            <h2 className="text-center mb-4">Create Your Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  name="name"
                  onChange={e => setValues({...values,name:e.target.value})}
                  className="form-control"
                  //value={formData.name}
                  
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={e => setValues({...values,email:e.target.value})}
                  className="form-control"
                  //value={formData.email}
                  
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={e => setValues({...values,password:e.target.value})}
                  className="form-control"
                  //value={formData.password}
                  //onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  required
                />
                <label htmlFor="terms" className="form-check-label">
                  I agree to the Terms and Policies
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mb-3"
                style={{
                  backgroundColor: "#F4A261",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </button>
              <p className="text-center" style={{ margin: "10px 0" }}>
                Or
              </p>
              <button
                className="btn btn-light w-100 mb-2"
                style={{
                  backgroundColor: "#4285F4",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Continue with Google
              </button>
              <button
                className="btn btn-light w-100"
                style={{
                  backgroundColor: "#3B5998",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Continue with Facebook
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Register; 