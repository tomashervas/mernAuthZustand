import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div>
            <h2>MERN Auth Zustand</h2>
        </div>
        <ul className="navbar-list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    </div>
  )
}