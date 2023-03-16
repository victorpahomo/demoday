import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authFirebaseService";
import { useDispatch } from "react-redux";
import logo_border from "../assets/CodeLMSIcon/logo_border.svg";

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
    <div className="flex flex-col h-screen justify-center items-center bg-[#f2f2f2] ">
      <div className="flex flex-col h-3/5 w-1/3 gap-5 justify-center items-center  bg-white pt-5 rounded-2xl shadow-2xl shadow-gray-400 ">
        <img className="w-3/4" src={logo_border} alt="" />

          <p className="w-full text-center text-lg text- text-gray-600">
            "La programación te da el poder de crear."
          </p>
     
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-2/3"
        >
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            autoComplete="email"
            type="email"
            name="email"
            placeholder="nombre@codelms.com"
            onChange={handleChange}
            className="w-full h-10 border-2 border-[#f2f2f2] rounded-xl p-1 bg-[#f2f2f2] text-primary-azulCeleste5 placeholder:text-gray-400 font-semibold transition-all hover:-translate-y-1 focus:text-primary-azulCeleste5 "
          />

          <label htmlFor="password" className="text-sm font-medium text-gray-600">
            Contraseña
          </label>
          <input
            autoComplete="current-password"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="w-full h-10 border-2 border-[#f2f2f2] rounded-xl p-1 bg-[#f2f2f2] text-primary-azulCeleste5 placeholder:text-gray-400 font-semibold transition-all hover:-translate-y-1"
            placeholder="Introduzca su contraseña"
          />

          <button
            type="submit"
            className="w-full h-10 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-1 bg-yellow-1000 rounded-xl text-gray-600 hover:text-primary-azulCeleste5 font-bold text-xl hover:bg-[#f2f2f2] mt-3  hover:-translate-y-1"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
        <div className="text-center text-gray-600 absolute bottom-2 justify-center font-mono text-lg">
          <p>CodeLMS® 2023</p>
          <p>Hecho por y para estudiantes</p>
        </div>
    </div>
  );
};

export default Login;
