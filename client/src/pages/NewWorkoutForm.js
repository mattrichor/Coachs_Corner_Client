import { useState, useEffect } from "react";
import {
  getWorkouts,
  allWorkouts,
  handleSubmit,
  handleUpdate,
} from "../services/Workouts";
import "../Workout.css";

import { MarkComplete } from "../services/Skills";
import { GetSkillsByPlayerId, GetSkillNames } from "../services/Skills";
import { useParams } from "react-router-dom";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";

const Workout = () => {
  let { playerId } = useParams();
  const [player, setPlayer] = useState([]);
  const [playerWorkouts, setPlayerWorkouts] = useState([]);
  const [workouts, setAllWorkouts] = useState([]);
  const [skills, setAllSkills] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [skillIncrease, setSkillIncrease] = useState(0);
  const [skillId, setSkillId] = useState(0);

  const [updateToggle, setUpdateToggle] = useState(false);

  useEffect(() => {
    const playerName = localStorage.getItem("player");
    let selplayer = JSON.parse(playerName);
    setPlayer(selplayer);
  }, []);

  useEffect(() => {
    const handleWorkouts = async () => {
      const data = await getWorkouts(playerId);
      setPlayerWorkouts(data);
      console.log(data);
    };
    handleWorkouts();
    setUpdateToggle(false);
  }, [player, updateToggle === true]);

  useEffect(() => {
    const getAllWorkouts = async () => {
      const data = await allWorkouts();
      setAllWorkouts(data);
    };
    getAllWorkouts();
  }, []);

  useEffect(() => {
    const getAllSkills = async () => {
      const data = await GetSkillsByPlayerId(playerId);
      setAllSkills(data);
    };
    getAllSkills();
  }, [player]);

  const submitHandle = async (e) => {
    e.preventDefault();
    await handleSubmit(playerId, {
      title,
      description,
      completionDate,
      skillIncrease,
      playerId,
      skillId,
    });
  };

  const completeWorkout = async (playerId, workoutId) => {
    const data = await MarkComplete(playerId, workoutId).catch((error) =>
      console.log(error)
    );
    console.log(data);
  };

  const updateHandle = async (
    workoutId,
    title,
    description,
    completionDate,
    skillIncrease
  ) => {
    const data = await handleUpdate(
      workoutId,
      title,
      description,
      completionDate,
      skillIncrease
    )
      .then((data) => console.log(data.status))
      .catch((error) => console.log(error));
    setUpdateToggle(true);
  };

  const updateWorkoutDelete = async (item) => {
    let index = playerWorkouts.indexOf(item);
    let temp = [...playerWorkouts];
    temp.splice(index, 1);
    setPlayerWorkouts(temp);
  };

  return (
    <div>
      <h1 className="title">Assign a new workout for {player.name}!</h1>
      <div>
        {playerWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            id={workout.id}
            title={workout.title}
            description={workout.description}
            completionDate={workout.completionDate}
            skillIncrease={workout.skillIncrease}
            name={player.name}
            playerId={playerId}
            titles={title}
            skillId={workout.skillId}
            descriptions={description}
            completionDates={completionDate}
            skillIncreases={skillIncrease}
            updateWorkoutDelete={updateWorkoutDelete}
            updateHandle={updateHandle}
            completeWorkout={completeWorkout}
          />
        ))}
      </div>
      <div className="add-workout-card">
        <h1 className="add-workout-title">
          Choose a new workout from the drop down below, or add in your own with
          the form!
        </h1>{" "}
        <select>
          <option value="nothing">Existing Workouts:</option>
          {workouts.map((workout) => (
            <option value="allWorkouts">{workout.title}</option>
          ))}
        </select>
        <div>
          <button type="submit">Send</button>
          <WorkoutForm submitHandle={submitHandle} />
        </div>
        <div className="new-workout">
          <form onSubmit={submitHandle}>
            <div className="title2">
              {/* <label htmlFor="title">Title: </label> */}
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="title"
                placeholder="Title"
                value={title}
                required
              />
            </div>
            <div className="desc">
              {/* <label className="desc-text" htmlFor="description">
                Description:{" "}
              </label> */}
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                id="description"
                placeholder="Description"
                value={description}
                required
              />
            </div>
            <div className="to-complete">
              <label htmlFor="completeBy">Complete Workout By: </label>
              <input
                onChange={(e) => setCompletionDate(e.target.value)}
                type="date"
                id="completeBy"
                placeholder=""
                value={completionDate}
                required
              />
            </div>
            <div className="select-skills">
              Select Skills:
              <select
                value={skillId}
                onChange={(e) => setSkillId(e.target.value)}
              >
                <option value="nothing"></option>
                {skills.map((skill) => (
                  <option
                    value={skill.id}
                    // onChange={() => setSkillName(skill.skillName)}
                  >
                    {skill.skillName}
                  </option>
                ))}
              </select>
            </div>
            <label htmlFor="skillIncrease">Skill Increase: </label>
            <input
              onChange={(e) => setSkillIncrease(e.target.value)}
              type="number"
              id="skillIncrease"
              placeholder="Skill (Number)"
              value={skillIncrease}
              required
            />

            <button className="submit" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Workout;
