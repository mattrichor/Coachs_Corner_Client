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
        <div className="title-wrapper">
          <label htmlFor="title">Title: </label>
          <input
            className="title-input"
            onChange={(e) => props.setTitle(e.target.value)}
            type="text"
            id="title"
            placeholder="Title"
            defaultValue={props.selectedWorkoutData.title}
            ref={newTitle}
            required
          />
        </div>
        <div className="descr-wrapper">
          <label htmlFor="description">Description: </label>
          <textarea
            className="descr-input"
            onChange={(e) => props.setDescription(e.target.value)}
            type="text"
            id="description"
            placeholder="Description"
            defaultValue={props.selectedWorkoutData.description}
            ref={newDescription}
            required
          />
        </div>
        <div className="comp-wrapper">
          <label htmlFor="completeBy">Complete Workout By: </label>
          <input
            className="comp-input"
            onChange={(e) => props.setCompletionDate(e.target.value)}
            type="date"
            id="completeBy"
            placeholder=""
            value={props.completionDate}
            required
          />
        </div>
        <div className="skill-wrapper">
          Select Skills:
          <select
            className="skill-input"
            value={props.skillId}
            onChange={(e) => props.setSkillId(e.target.value)}
          >
            <option value="nothing">Select Skill Below</option>
            {props.skills.map((skill) => (
              <option value={skill.id}>{skill.skillName}</option>
            ))}
          </select>
        </div>
        <div className="incr-wrapper">
          <label htmlFor="skillIncrease">Skill Increase: </label>
          <input
            className="incr-input"
            onChange={(e) => props.setSkillIncrease(e.target.value)}
            type="number"
            id="skillIncrease"
            placeholder="Skill (Number)"
            value={props.skillIncrease}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Create
        </button>
      </form>
    </div>
  )
}

export default ExistingForm
