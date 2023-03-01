import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
// This component is used to protect the routes that are only accessible to authenticated users
export function ProtectedRoute({ children }) {
    const {user,loading} = useAuth()

    if (loading) return <Loading />;

    if (!user) return <Navigate to="/login" />;
  
    return <>{children}</>;
    
}