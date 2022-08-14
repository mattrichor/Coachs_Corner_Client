import { NavLink } from 'react-router-dom'

const Nav = ({ authenticated, coach, handleLogOut }) => {
  let authenticatedOptions
  if (coach) {
    authenticatedOptions = (
      <nav className="navbar">
        <h3>Welcome Coach {coach.name}!</h3>
        <NavLink to="/coachfeed">Feed</NavLink>
        <NavLink onClick={handleLogOut} to="/">
          Sign Out
        </NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </nav>
  )
  return (
    <header>
      <NavLink to="/">
        <div className="logo-wrapper" alt="logo"></div>
      </NavLink>
      {authenticated && coach ? authenticatedOptions : publicOptions}
    </header>
  )
}
export default Nav
