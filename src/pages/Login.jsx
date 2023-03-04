import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {login} from "../services/authService";
import { useDispatch } from "react-redux";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password, dispatch);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });



  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-72 ">

        <p className="w-72 text-center text-sm text-gray-600">
          Login or create an account with your email to start ordering
        </p>

      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-72">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          autoComplete="email"
          type="email"
          name="email"
          placeholder="example@company.com"
          onChange={handleChange}
          className="w-full border-2 border-gray-100 rounded-xl p-1 bg-transparent hover:bg-yellow-50"
        />

        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
        autoComplete="current-password"
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          className="w-full border-2 border-gray-100 rounded-xl p-1 bg-transparent hover:bg-yellow-50"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-1 bg-yellow-1000 rounded-xl text-gray-800 font-bold text-sm hover:bg-yellow-400"
        >
          Login
        </button>
      </form>
      <div className="flex justify-between mt-2 w-64 h-8 border-red-400">


      </div>
      <p className="text-xs flex justify-between gap-1 mt-2">
        Don't have an account?

      </p>
    </div>
  );
};

export default Login;