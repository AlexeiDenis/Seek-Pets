import { NavLink } from "react-router-dom"
import useLogout from "../hooks/useLogout";
import supabase from "../hooks/useSupabase";
import { useEffect,useState } from "react";
import { authContext } from "../App";
import { useContext } from "react";
export default function Header() {

 const { user } = useContext(authContext);
console.log("din header",user)
// useEffect(()=>{
// async function wait(){
//   const { data, error } = await supabase.auth.getSession();
//   setSes(data.session.user.aud)
// }
// wait();
// },[])


  return (
    <div><p>{user?user:"not authenticated"}</p>
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