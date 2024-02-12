import { NavLink } from "react-router-dom"
export default function Header(){
    return(
        <div><p>header</p>
    <NavLink to="/">Home</NavLink>
        <NavLink to="/found" style={({ isActive, isPending }) => {
    return {
      color: isActive ? "red" : "white",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Found Page</NavLink>
        <NavLink to="/lost" style={({ isActive, isPending }) => {
    return {
      color: isActive ? "red" : "white",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Lound Page</NavLink>
        </div>
    )
}