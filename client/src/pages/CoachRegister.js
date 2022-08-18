import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterCoach } from '../services/Auth'
import '../register.css'
const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    sport: '',
    teamName: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterCoach({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      teamName: formValues.teamName,

      sport: formValues.sport
    })
    setFormValues({
      name: '',
      email: '',
      sport: '',
      teamName: '',
      password: '',
      confirmPassword: ''
    })
    if (formValues.password !== formValues.confirmPassword) {
      alert('Passwords do not match! Please try again!')
    } else {
      navigate('/signin')
    }
  }
  return (
    <div className="signin-col-ch">
      <div className="card-overlay-centered-ch">
        <h1>Your Team Awaits!</h1>
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name"></label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Full Name"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email"></label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="sport"></label>
            <input
              onChange={handleChange}
              name="sport"
              type="text"
              placeholder="Sport"
              value={formValues.sport}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="teamName"></label>
            <input
              onChange={handleChange}
              name="teamName"
              type="text"
              placeholder="Team Name"
              value={formValues.teamName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password"></label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              placeholder="Password"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword"></label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            className="submit-btn"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
