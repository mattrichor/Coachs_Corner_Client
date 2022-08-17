import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInUser } from "../services/Auth";
import "../SignIn.css";
import "../register.css";

const SignIn = (props) => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(formValues);
    setFormValues({ email: "", password: "" });
    props.setCoach(payload);
    props.toggleAuthenticated(true);
    navigate("/coachfeed");
  };

  return (
    <div className="bg-sign-in">
      <div className="signin-col-ch">
        <div className="card-overlay-centered-ch">
          <h1>Your Team Awaits Orders!</h1>
          <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email"></label>
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
              <label htmlFor="password"></label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="password"
                value={formValues.password}
                required
              />
            </div>
            <button disabled={!formValues.email || !formValues.password}>
              Sign In
            </button>
            <br></br>
            <button
              onClick={() => {
                navigate("/register");
              }}
            >
              Register Here!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
