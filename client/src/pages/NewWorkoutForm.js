import { useState, useEffect } from 'react'
import {
  getWorkouts,
  allWorkouts,
  handleSubmit,
  handleDelete,
  handleUpdate
} from '../services/Workouts'
import { useParams } from 'react-router-dom'

const NewWorkoutForm = () => {
  const [playerWorkouts, setPlayerWorkouts] = useState([])
  const [newWorkout, setNewWorkout] = useState([])
  const [workouts, setAllWorkouts] = useState([])
  const initialState = {
    title: '',
    description: '',
    completionDate: '',
    skillIncrease: ''
  }
  let { playerId } = useParams()
  const [player, setPlayer] = useState([])

  useEffect(() => {
    const playerName = localStorage.getItem('player')
    let selplayer = JSON.parse(playerName)
    setPlayer(selplayer)
  }, [])

  const [formState, setFormState] = useState(initialState)
  const [submitted, setSubmitted] = useState(true)

  useEffect(() => {
    const handleWorkouts = async () => {
      const data = await getWorkouts(playerId)
      setPlayerWorkouts(data)
      console.log(data)
    }
    handleWorkouts()
  }, [player])

  useEffect(() => {
    const getAllWorkouts = async () => {
      const data = await allWorkouts()
      setAllWorkouts(data)
    }
    getAllWorkouts()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const submitHandle = async (event) => {
    event.preventDefault()
    const data = await handleSubmit()
    console.log(data)
    setFormState(initialState)
    setSubmitted(true)
    event.target.reset()
  }

  const deleteHandle = async () => {
    const data = await handleDelete().catch((error) => console.log(error))
    console.log(data)
  }

  const updateHandle = async () => {
    const data = await handleUpdate()
      .then((data) => console.log(data.status))
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <h1>Assign a new workout for {player.name}!</h1>
      <div>
        {playerWorkouts.map((workout) => (
          <div key={workout.id}>
            <h3>Title: {workout.title}</h3>
            <p>Description: {workout.description}</p>
            <p>Complete Workout by: {workout.completionDate}</p>
            <p>This workout will increase skill by: {workout.skillIncrease}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>
          Choose a new workout from the drop down below, or add in your own with
          the form!
        </h1>
        <select>
          <option value="nothing"></option>
          {workouts.map((workout) => (
            <option value="allWorkouts">{workout.title}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default NewWorkoutForm
