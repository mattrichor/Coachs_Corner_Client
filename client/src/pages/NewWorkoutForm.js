import { useState, useEffect } from 'react'
import {
  getWorkouts,
  allWorkouts,
  handleSubmit,
  handleUpdate,
  GetWorkoutById
} from '../services/Workouts'
import '../Workout.css'

import { MarkComplete } from '../services/Skills'
import { GetSkillsByPlayerId } from '../services/Skills'
import { useParams } from 'react-router-dom'
import WorkoutCard from '../components/WorkoutCard'
import NewForm from '../components/NewForm'
import ExistingForm from '../components/ExistingForm'

const Workout = () => {
  let { playerId } = useParams()
  const [player, setPlayer] = useState([])
  const [playerWorkouts, setPlayerWorkouts] = useState([])
  const [workouts, setAllWorkouts] = useState([])
  const [skills, setAllSkills] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [completionDate, setCompletionDate] = useState('')
  const [skillIncrease, setSkillIncrease] = useState('')
  const [skillId, setSkillId] = useState(0)
  const [selWorkout, setSelWorkout] = useState()
  const [selectedWorkoutData, setSelectedWorkoutData] = useState({})
  const [formToggle, setFormToggle] = useState(false)

  const [updateToggle, setUpdateToggle] = useState(false)

  useEffect(() => {
    const playerName = localStorage.getItem('player')
    let selplayer = JSON.parse(playerName)
    setPlayer(selplayer)
  }, [])

  useEffect(() => {
    const handleWorkouts = async () => {
      const data = await getWorkouts(playerId)
      setPlayerWorkouts(data)
      console.log(data)
    }
    handleWorkouts()
    setUpdateToggle(false)
  }, [player, updateToggle === true])

  useEffect(() => {
    const getAllWorkouts = async () => {
      const data = await allWorkouts()
      setAllWorkouts(data)
    }
    getAllWorkouts()
  }, [])

  useEffect(() => {
    const getAllSkills = async () => {
      const data = await GetSkillsByPlayerId(playerId)
      setAllSkills(data)
    }
    getAllSkills()
  }, [player])

  const submitHandle = async (e) => {
    e.preventDefault()
    await handleSubmit(playerId, {
      title,
      description,
      completionDate,
      skillIncrease,
      playerId,
      skillId
    })
    setUpdateToggle(true)
  }

  const completeWorkout = async (playerId, workoutId) => {
    const data = await MarkComplete(playerId, workoutId).catch((error) =>
      console.log(error)
    )
    console.log(data)
    setUpdateToggle(true)
  }

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
      .catch((error) => console.log(error))
    setUpdateToggle(true)
  }

  const updateWorkoutDelete = async (item) => {
    let index = playerWorkouts.indexOf(item)
    let temp = [...playerWorkouts]
    temp.splice(index, 1)
    setPlayerWorkouts(temp)
  }

  const populateWorkout = async (e) => {
    e.preventDefault()
    const workoutData = await GetWorkoutById(selWorkout)
    setSelectedWorkoutData(workoutData)
    setFormToggle(true)
  }

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
            completed={workout.completed}
            playerId={playerId}
            titles={title}
            skillId={workout.skillId}
            descriptions={description}
            completionDates={completionDate}
            skillIncreases={skillIncrease}
            updateWorkoutDelete={updateWorkoutDelete}
            updateHandle={updateHandle}
            completeWorkout={completeWorkout}
            setUpdateToggle={setUpdateToggle}
          />
        ))}
      </div>
      <div>
        <h1>Create new workout, or choose from a template:</h1>
        <div>
          Existing Workouts:
          <form onSubmit={populateWorkout}>
            <select
              className="skill-input workout-input"
              value={selWorkout}
              onChange={(e) => setSelWorkout(e.target.value)}
            >
              <option value="nothing">Select Workout Below</option>
              {workouts.map((workout) => (
                <option value={workout.id}>{workout.title}</option>
              ))}
            </select>
            <button type="submit" className="submit-btn workout-btn-select">
              Select Past Workout
            </button>
          </form>
          {formToggle === true ? (
            <ExistingForm
              submitHandle={submitHandle}
              selectedWorkoutData={selectedWorkoutData}
              setTitle={setTitle}
              title={title}
              playerId={playerId}
              setDescription={setDescription}
              description={description}
              setCompletionDate={setCompletionDate}
              completionDate={completionDate}
              skillId={skillId}
              setSkillId={setSkillId}
              skills={skills}
              setSkillIncrease={setSkillIncrease}
              skillIncrease={skillIncrease}
              setUpdateToggle={setUpdateToggle}
            />
          ) : (
            <NewForm
              submitHandle={submitHandle}
              setTitle={setTitle}
              title={title}
              setDescription={setDescription}
              description={description}
              setCompletionDate={setCompletionDate}
              completionDate={completionDate}
              skillId={skillId}
              setSkillId={setSkillId}
              skills={skills}
              playerId={playerId}
              setSkillIncrease={setSkillIncrease}
              skillIncrease={skillIncrease}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Workout
