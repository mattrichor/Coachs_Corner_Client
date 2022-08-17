import React from 'react'
import { handleDelete } from '../services/Workouts'

const WorkoutCard = (props) => {
  const deleteHandle = async (workoutId) => {
    const data = await handleDelete(workoutId).catch((error) =>
      console.log(error)
    )
    console.log(data)
  }

  return (
    <div>
      <h3>Title: {props.title}</h3>
      <p>Description: {props.description}</p>
      <p>Complete workout by: {props.completionDate}</p>
      <p>This workout will increase skill by: {props.skillIncrease}</p>
      <button
        className="collectionButton"
        onClick={() => {
          const answer = window.confirm(
            `Are you sure you want to delete this workout for ${props.name} `
          )
          if (answer) {
            deleteHandle(props.id)
            props.updateWorkoutDelete(props)
          } else {
            return
          }
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          props.updateHandle(
            props.id,
            props.titles,
            props.descriptions,
            props.completionDates,
            props.skillIncreases
          )
        }}
      >
        Update
      </button>
      <button
        className="completion"
        onClick={() => props.completeWorkout(props.playerId, props.id)}
      >
        Mark As Complete
      </button>
    </div>
  )
}

export default WorkoutCard
