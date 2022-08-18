import '../Feed.css'

import React from 'react'
import { useState, useEffect, createRef } from 'react'

const NewForm = (props) => {
  return (
    <div className="workout-card">
      <form onSubmit={props.submitHandle}>
        <div className="title-wrapper">
          <label htmlFor="title"> </label>
          <input
            className="title-input"
            onChange={(e) => props.setTitle(e.target.value)}
            type="text"
            id="title"
            placeholder="Title"
            value={props.title}
            required
          />
        </div>
        <div className="descr-wrapper">
          <label htmlFor="description"> </label>
          <textarea
            className="descr-input"
            onChange={(e) => props.setDescription(e.target.value)}
            type="text"
            id="description"
            placeholder="Description"
            value={props.description}
            required
          />
        </div>
        <div className="comp-wrapper">
          <label htmlFor="completeBy">Complete By:</label>
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
          This workout will increase:
          <select
            className="skill-input"
            value={props.skillId}
            onChange={(e) => props.setSkillId(e.target.value)}
          >
            {props.skills.map((skill) => (
              <option value={skill.id}>{skill.skillName}</option>
            ))}
          </select>
        </div>
        <div className="incr-wrapper">
          <label htmlFor="skillIncrease"> By </label>
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
          Send
        </button>
      </form>
    </div>
  )
}

export default NewForm
