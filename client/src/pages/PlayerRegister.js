import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterPlayer } from '../services/Auth'

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
            <label htmlFor="proPic">Profile Picture:</label>
            <input
              onChange={handleChange}
              name="proPic"
              type="text"
              placeholder="Picture Here"
              value={formValues.proPic}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="primaryPosition">Primary Position:</label>
            <input
              onChange={handleChange}
              name="primaryPosition"
              type="text"
              placeholder="Primary Position Here"
              value={formValues.primaryPosition}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="secondaryPosition">Secondary Position:</label>
            <input
              onChange={handleChange}
              name="secondaryPosition"
              type="text"
              placeholder="Secondary Position Here"
              value={formValues.secondaryPosition}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="height">Height:</label>
            <input
              onChange={handleChange}
              name="height"
              type="number"
              placeholder="Height Here"
              value={formValues.height}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="weight">Weight:</label>
            <input
              onChange={handleChange}
              name="weight"
              type="number"
              placeholder="Weight Here"
              value={formValues.weight}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="age">Age:</label>
            <input
              onChange={handleChange}
              name="age"
              type="number"
              placeholder="Age Here"
              value={formValues.age}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="isActive">Active:</label>
            <input
              onChange={handleChange}
              name="isActive"
              type="number"
              placeholder="True or False?"
              value={formValues.isActive}
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
