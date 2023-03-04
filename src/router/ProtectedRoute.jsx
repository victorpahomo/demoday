import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// This component is used to protect the routes that are only accessible to authenticated users
export function ProtectedRoute({ children }) {
    const {user,loading} = useSelector(state => state.auth)

    if (loading) return <div>Loading...</div>;

    if (!user) return <Navigate to="/login" />;
  
    return <>{children}</>;
    
}