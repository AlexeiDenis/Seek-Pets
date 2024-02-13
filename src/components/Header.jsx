import { NavLink, Link } from "react-router-dom"
export default function Header() {
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
    </div>
  )
}