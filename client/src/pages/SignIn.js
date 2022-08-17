import '../SignIn.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInCoach } from '../services/Auth'
import { SignInPlayer } from '../services/Auth'

const SignIn = (props) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const [loginToggle, setLoginToggle] = useState(false)
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const toggleLogin = () => {
    if (loginToggle === false) {
      setLoginToggle(true)
      console.log(loginToggle)
    } else if (loginToggle === true) {
      setLoginToggle(false)
      console.log(loginToggle)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loginToggle === false) {
      const payload = await SignInCoach(formValues)
      setFormValues({ email: '', password: '' })
      props.setCoach(payload)
      props.toggleAuthenticated(true)
      navigate('/coachfeed')
    } else if (loginToggle === true) {
      const payload = await SignInPlayer(formValues)
      setFormValues({ email: '', password: '' })
      const player = JSON.parse(localStorage.getItem('player'))
      props.setCoach(payload)
      props.toggleAuthenticated(true)
      navigate(`/players/${player.id}`)
    }
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <label className="login-toggle">
            <input type="checkbox" onClick={() => toggleLogin()} />
            <span className="slider"></span>
          </label>
          <button disabled={!formValues.email || !formValues.password}>
            Submit
          </button>
          <br></br>
          <button
            onClick={() => {
              navigate('/register')
            }}
          >
            Register Here!
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
