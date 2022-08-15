import { useState, useEffect } from 'react'
import {
  getWorkouts,
  allWorkouts,
  handleSubmit,
  handleDelete,
  handleUpdate
} from '../services/Workouts'

const NewWorkoutForm = ({ player }) => {
  const [playerWorkouts, setPlayerWorkouts] = useState([])
  const [newWorkout, setNewWorkout] = useState([])
  const initialState = {
    title: '',
    description: '',
    completionDate: '',
    skillIncrease: ''
  }

  const [formState, setFormState] = useState(initialState)
  const [submitted, setSubmitted] = useState(true)

  useEffect(() => {
    const handleWorkouts = async () => {
      const data = await getWorkouts(player.id)
      setPlayerWorkouts(data)
      console.log(data)
    }
    handleWorkouts()
  }, [player])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const submitHandle = async (event) => {
    event.preventDefault()
    const data = await handleSubmit()
    setFormState(initialState)
    setSubmitted(true)
    event.target.reset()
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
    </div>
  )
}

export default NewWorkoutForm
