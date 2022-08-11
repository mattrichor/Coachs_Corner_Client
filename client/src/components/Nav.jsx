import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">Home |</NavLink>
        <NavLink to="/register">Register |</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
      </div>
    </nav>
  )
}
export default Nav
