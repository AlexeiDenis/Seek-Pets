import { Navigate, redirect } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
export default function ProtectedRoute({ children }) {
    let { user } = useContext(AuthContext);
    return (user ? children : <Navigate to="/login" />)
}