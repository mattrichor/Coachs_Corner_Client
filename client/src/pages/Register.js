import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()

  return (
    <div className="register-background">
      <h1 className="coach-q">Are you a Coach?</h1>
      <div className="bl-ch-div">
        <button
          className="submit-btn"
          onClick={() => {
            navigate('./coach')
          }}
        >
          Yes
        </button>
        <button
          className="submit-btn"
          onClick={() => {
            navigate('./player')
          }}
        >
          No
        </button>
      </div>
    </div>
  )
}

export default Register
