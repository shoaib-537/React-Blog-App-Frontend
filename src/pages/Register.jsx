// import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const [err, setError] = useState(null);

  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8800/api/auth/register", inputs);
  //     navigate("/login");
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  // };

  // console.log(inputs);
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          // onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          // onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          // onChange={handleChange}
        />
        <button>Register</button>
        <p>Email already exists!</p>
        <span>
          Already have an account? <Link to="/login">Login</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Register;
