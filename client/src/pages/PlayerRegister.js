import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterPlayer } from '../services/Auth'
import '../register.css'
const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    proPic: '',
    primaryPosition: '',
    secondaryPosition: '',
    height: undefined,
    weight: undefined,
    age: undefined,
    isActive: undefined,
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterPlayer({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues({
      name: '',
      email: '',
      proPic: '',
      primaryPosition: '',
      secondaryPosition: '',
      height: undefined,
      weight: undefined,
      age: undefined,
      isActive: undefined,
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
    <div className="signin-col">
      <div className="card-overlay-centered">
        <h1>Please Register Here:</h1>
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
            <label htmlFor="primaryPosition"></label>
            <input
              onChange={handleChange}
              name="primaryPosition"
              type="text"
              placeholder="Primary Position"
              value={formValues.primaryPosition}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="secondaryPosition"></label>
            <input
              onChange={handleChange}
              name="secondaryPosition"
              type="text"
              placeholder="Secondary Position"
              value={formValues.secondaryPosition}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="height"></label>
            <input
              onChange={handleChange}
              name="height"
              type="number"
              placeholder="Height"
              value={formValues.height}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="weight"></label>
            <input
              onChange={handleChange}
              name="weight"
              type="number"
              placeholder="Weight"
              value={formValues.weight}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="age"></label>
            <input
              onChange={handleChange}
              name="age"
              type="number"
              placeholder="Age"
              value={formValues.age}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password"></label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper-last">
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
