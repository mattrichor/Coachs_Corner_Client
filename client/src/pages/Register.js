import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()

  return (
    <div>
      <h1>Are you a Coach? Yes or No?</h1>
      <button
        onClick={() => {
          navigate('./coach')
        }}
      >
        Yes
      </button>
      <button
        onClick={() => {
          navigate('./player')
        }}
      >
        No
      </button>
    </div>
  )
}

export default Register
