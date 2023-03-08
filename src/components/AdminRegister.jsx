import { useState } from "react";
import { signUp } from "../services/authFirebaseService";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AdminRegister = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(user.email, user.password,dispatch);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center w-72 ">

                <p className="w-72 text-center text-sm text-gray-600">
                    Create an account with your email to start ordering
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
                    Register
                </button>
            </form>
            <p className="text-xs flex justify-between gap-1 mt-5">
                You have an account?
                <Link
                    to="/login"
                    className="text-blue-700 hover:text-blue-900 font-bold"
                >
                    Login
                </Link>
            </p>
        </div>
    );
};

export default AdminRegister;