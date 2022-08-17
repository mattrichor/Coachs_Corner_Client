import { useNavigate } from "react-router-dom";
import "../Home.css";
const Home = () => {
  let navigate = useNavigate();
  // document.body.className = "home";
  return (
    <div className="home">
      <h1 className="homeH1">
        Welcome to Coach's Corner! Please click below to get started!
      </h1>
      <section>
        {/* <img src="https://pixy.org/src/486/4860311.jpg" className="bats"></img> */}
        <button onClick={() => navigate("/signin")}>
          Click Here To Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;
