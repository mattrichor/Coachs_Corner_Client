import React, { useEffect, useState } from 'react'
import { handleDelete, MarkComplete } from '../services/Workouts'
import '../Workout.css'
import checkmark from '../images/checkmark.png'
import { GetSkillNames } from '../services/Skills'

const WorkoutCard = (props) => {
  const [skillName, setSkillName] = useState('')

  const deleteHandle = async (workoutId) => {
    const data = await handleDelete(workoutId).catch((error) =>
      console.log(error)
    )
    console.log(data)
  }
  useEffect(() => {
    const getSkillName = async () => {
      const data = await GetSkillNames(props.skillId)
      console.log(data)
      setSkillName(data.skillName)
    }
    getSkillName()
  }, [])

  const markComplete = async (workoutId) => {
    const completedWorkout = await MarkComplete(workoutId)
    console.log(completedWorkout)
  }

  const isPlayer = JSON.parse(localStorage.getItem('isPlayer'))

  return (
    <div className="workout-card">
      {props.completed === true ? (
        <div className="card-top completed">
          <button
            className="delete-btn"
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
            X
          </button>
          <h3 className="workout-title">{props.title}</h3>
          <div>Workout Completed!</div>
        </div>
      ) : (
        <div className="card-top">
          <button
            className="delete-btn"
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
            X
          </button>
          <h3 className="workout-title">{props.title}</h3>
          <div>Workout Assigned</div>
        </div>
      )}

      <div className="workout-description">{props.description}</div>
      <div className="workout-comp-date">
        Complete workout by:
        <span className="comp-date"> {props.completionDate}</span>
      </div>
      <p>
        This workout will increase {skillName} by: {props.skillIncrease}
      </p>
      {isPlayer === true ? (
        <div>Mark as Complete:</div>
      ) : (
        <button
          className="update-btn"
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
      )}

      {isPlayer === true ? (
        <div className="container-player">
          <img
            src={checkmark}
            className="completion-btn-player"
            onClick={() => markComplete(props.id)}
          ></img>
        </div>
      ) : (
        <div className="container">
          <img
            src={checkmark}
            className="completion-btn"
            onClick={() => props.completeWorkout(props.playerId, props.id)}
          ></img>
        </div>
      )}
    </div>
  )
}

export default WorkoutCard
