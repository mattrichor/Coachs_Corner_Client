import '../Feed.css'

import React from 'react'
import { useState, useEffect, createRef } from 'react'
import { handleSubmit } from '../services/Workouts'

const ExistingForm = (props) => {
  const newTitle = createRef()
  const newDescription = createRef()

  const createWorkout = (e) => {
    e.preventDefault()
    submitHandle(
      newTitle.current.value,
      newDescription.current.value,
      props.completionDate,
      props.skillIncrease,
      props.playerId,
      props.skillId
    )
  }

  const submitHandle = async (
    title,
    description,
    completionDate,
    skillIncrease,
    playerId,
    skillId
  ) => {
    await handleSubmit(playerId, {
      title,
      description,
      completionDate,
      skillIncrease,
      playerId,
      skillId
    })
  }

  return (
    <div className="workout-card">
      <form onSubmit={createWorkout}>
        <label htmlFor="title">Title: </label>
        <input
          onChange={(e) => props.setTitle(e.target.value)}
          type="text"
          id="title"
          placeholder="Title"
          defaultValue={props.selectedWorkoutData.title}
          ref={newTitle}
          required
        />
        <label htmlFor="description">Description: </label>
        <textarea
          onChange={(e) => props.setDescription(e.target.value)}
          type="text"
          id="description"
          placeholder="Description"
          defaultValue={props.selectedWorkoutData.description}
          ref={newDescription}
          required
        />
        <label htmlFor="completeBy">Complete Workout By: </label>
        <input
          onChange={(e) => props.setCompletionDate(e.target.value)}
          type="date"
          id="completeBy"
          placeholder=""
          value={props.completionDate}
          required
        />
        <div>
          Select Skills:
          <select
            value={props.skillId}
            onChange={(e) => props.setSkillId(e.target.value)}
          >
            <option value="nothing">Select Skill Below</option>
            {props.skills.map((skill) => (
              <option value={skill.id}>{skill.skillName}</option>
            ))}
          </select>
        </div>
        <label htmlFor="skillIncrease">Skill Increase: </label>
        <input
          onChange={(e) => props.setSkillIncrease(e.target.value)}
          type="number"
          id="skillIncrease"
          placeholder="Skill (Number)"
          value={props.skillIncrease}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ExistingForm
