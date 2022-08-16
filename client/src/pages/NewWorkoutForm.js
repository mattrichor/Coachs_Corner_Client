import { useState, useEffect } from 'react'
import {
  getWorkouts,
  allWorkouts,
  handleSubmit,
  handleDelete,
  handleUpdate
} from '../services/Workouts'
import { GetSkillsByPlayerId } from '../services/Skills'
import { useParams } from 'react-router-dom'

const NewWorkoutForm = () => {
  let { playerId } = useParams()
  const [player, setPlayer] = useState([])
  const [playerWorkouts, setPlayerWorkouts] = useState([])
  const [workouts, setAllWorkouts] = useState([])
  const [skills, setAllSkills] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [completionDate, setCompletionDate] = useState('')
  const [skillIncrease, setSkillIncrease] = useState(0)
  const [playerWorkoutSkill, setPlayerWorkoutSkill] = useState('')
  //   const [formValues, setFormValues] = useState({
  //     title: '',
  //     description: '',
  //     completionDate: '',
  //     skillIncrease: ''
  //   })

  useEffect(() => {
    const playerName = localStorage.getItem('player')
    let selplayer = JSON.parse(playerName)
    setPlayer(selplayer)
  }, [])
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

  useEffect(() => {
    const getAllSkills = async () => {
      const data = await GetSkillsByPlayerId(playerId)
      setAllSkills(data)
    }
    getAllSkills()
  }, [player])

  //   const handleChange = (e) => {
  //     setFormValues({ ...formValues, [e.target.name]: e.target.value })
  //   }

  const submitHandle = async (e) => {
    e.preventDefault()
    await handleSubmit(playerId, {
      title,
      description,
      completionDate,
      skillIncrease,
      playerId
    })
    // setFormValues({
    //   title: '',
    //   description: '',
    //   completionDate: '',
    //   skillIncrease: ''
    // })
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
            <p>
              This workout will increase {} skill by: {workout.skillIncrease}
            </p>
          </div>
        ))}
      </div>
      <div>
        <h1>
          Choose a new workout from the drop down below, or add in your own with
          the form!
        </h1>
        <div>
          Existing Workouts:
          <form onSubmit={submitHandle}>
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
              <select>
                <option value="nothing"></option>
                {skills.map((skill) => (
                  <option value="allSkills">{skill.skillName}</option>
                ))}{' '}
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewWorkoutForm
