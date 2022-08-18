import '../Feed.css'

import React from 'react'
import { useState, useEffect, createRef } from 'react'

const NewForm = (props) => {
  return (
    <form onSubmit={props.submitHandle}>
      <label htmlFor="title">Title: </label>
      <input
        onChange={(e) => props.setTitle(e.target.value)}
        type="text"
        id="title"
        placeholder="Title"
        value={props.title}
        required
      />
      <label htmlFor="description">Description: </label>
      <input
        onChange={(e) => props.setDescription(e.target.value)}
        type="text"
        id="description"
        placeholder="Description"
        value={props.description}
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
          <option value="nothing"></option>
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
  )
}

export default NewForm
