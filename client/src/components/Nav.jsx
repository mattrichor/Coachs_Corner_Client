import { NavLink } from 'react-router-dom'

const Nav = ({ authenticated, coach, handleLogOut }) => {
  const isPlayer = JSON.parse(localStorage.getItem('isPlayer'))

  let authenticatedOptions
  if (isPlayer === false && coach) {
    authenticatedOptions = (
      <nav className="navbar">
        <h3>Welcome Coach {coach.name}!</h3>
        <NavLink to="/coachfeed">Feed</NavLink>
        <NavLink onClick={handleLogOut} to="/">
          Sign Out
        </NavLink>
      </nav>
    )
  } else if (isPlayer === true && coach) {
    authenticatedOptions = (
      <nav className="navbar">
        <h3>Welcome {coach.name}!</h3>
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
