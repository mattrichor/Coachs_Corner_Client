import React from 'react'

const WorkoutForm = () => {
  return (
    <div>
      {/* Existing Workouts: */}
      {/* <form onSubmit={submitHandle}>
        <select>
          <option value="nothing"></option>
          {workouts.map((workout) => (
            <option value="allWorkouts">{workout.title}</option>
          ))}
        </select>
        {''}

        <label htmlFor="title">Title: </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          required
        />
        <label htmlFor="description">Description: </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
          placeholder="Description"
          value={description}
          required
        />
        <label htmlFor="completeBy">Complete Workout By: </label>
        <input
          onChange={(e) => setCompletionDate(e.target.value)}
          type="date"
          id="completeBy"
          placeholder=""
          value={completionDate}
          required
        />
        <div>
          {' '}
          Select Skills:
          <select value={skillId} onChange={(e) => setSkillId(e.target.value)}>
            <option value="nothing"></option>
            {skills.map((skill) => (
              <option value={skill.id}>{skill.skillName}</option>
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
        <button type="submit">Send</button>
      </form> */}
    </div>
  )
}

export default WorkoutForm
