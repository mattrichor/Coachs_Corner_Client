import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterCoach } from '../services/Auth'

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
      password: formValues.password
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
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Full Name:</label>
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
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="email@email.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="sport">Sport:</label>
            <input
              onChange={handleChange}
              name="sport"
              type="text"
              placeholder="Sport Here"
              value={formValues.sport}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="teamName">Team Name:</label>
            <input
              onChange={handleChange}
              name="teamName"
              type="text"
              placeholder="Team Name Here"
              value={formValues.teamName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password:</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
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
