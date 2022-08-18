import { useNavigate } from 'react-router-dom'
import '../Home.css'
const Home = () => {
  let navigate = useNavigate()
  // document.body.className = "home";
  return (
    <div className="home">
      <div className="home-title">
        <h1 className="homeH1">Welcome to Coach's Corner!</h1>
        <h1 className="homeH2">A Gamified Approach to Coaching Athletes</h1>
      </div>
      <section>
        {/* <img src="https://pixy.org/src/486/4860311.jpg" className="bats"></img> */}
        <div className="home-btn-div">
          <button className="homeButton" onClick={() => navigate('/signin')}>
            Click Here To Get Started
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
