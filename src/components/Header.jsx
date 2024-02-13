import { NavLink } from "react-router-dom"
import useLogout from "../hooks/useLogout";
import supabase from "../hooks/useSupabase";
import { useEffect,useState } from "react";
import { authContext } from "../App";
import { useContext } from "react";
export default function Header() {
let [ses, setSes]= useState(null)
const { user } = useContext(authContext) || {};
  
  console.log(user)
  return (
    <div><p>header</p>
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
       { user?<button onClick={useLogout}>logout</button>:<NavLink to="/login" style={({ isActive }) => {
        return {
          color: isActive ? "red" : "white",
          pointerEvents: isActive ? "none" : "auto"
        };
      }}>Login Page</NavLink>}
    </div>
  )
}