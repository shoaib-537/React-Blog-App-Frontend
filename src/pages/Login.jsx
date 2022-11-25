import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   password: "",
  // });

  // const [err, setError] = useState(null);

  // const navigate = useNavigate();

  // const { login } = useContext(AuthContext);

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     login(inputs)
  //     // await axios.post("http://localhost:8800/api/auth/login", inputs);
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  // };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          placeholder="Username"
          name="username"
          // onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          // onChange={handleChange}
        />
        <button>Login</button>
        <p>Invalid email or password!</p>
        <span>
          Don't you have any account? <Link to="/register">Register</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
