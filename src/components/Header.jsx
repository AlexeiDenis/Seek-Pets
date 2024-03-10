import { NavLink } from "react-router-dom"
import useLogout from "../hooks/useLogout";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
export default function Header() {

 const { user } = useContext(AuthContext);


  return (
    <div>
      <NavLink to="/" style={({ isActive }) => {
        return {
          pointerEvents: isActive ? "none" : "auto"
        };
      }}>Home</NavLink>
      <NavLink to="/found" style={({ isActive }) => {
        return {
          color: isActive ? "red" : "white",

          pointerEvents: isActive ? "none" : "auto"
        };
      }}>Found Page</NavLink>
      <NavLink to="/lost" style={({ isActive }) => {
        return {
          color: isActive ? "red" : "white",
          pointerEvents: isActive ? "none" : "auto"
        };
      }}>Lost Page</NavLink>
      {user? <NavLink to="/create" style={({ isActive }) => {
        return {
          color: isActive ? "red" : "white",
          pointerEvents: isActive ? "none" : "auto"
        };
      }}>Report pet</NavLink>:null}
       { user?<button onClick={useLogout}>logout</button>:<NavLink to="/login" style={({ isActive }) => {
        return {
          color: isActive ? "red" : "white",
          pointerEvents: isActive ? "none" : "auto"
        };
      }}>Login Page</NavLink>}
    </div>
  )
}