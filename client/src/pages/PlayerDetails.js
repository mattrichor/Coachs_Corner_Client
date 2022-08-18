import '../Details.css'
import { Bar } from 'react-chartjs-2'
import WorkoutCard from '../components/WorkoutCard'
import { getWorkouts } from '../services/Workouts'
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { GetSkillsByPlayerId } from '../services/Skills'
import SkillChart from '../components/SkillChart'
import { useNavigate } from 'react-router-dom'
import emptyProPic from '../images/propic.png'
import pitcher from '../images/pitcher.png'
import fielder from '../images/fielder.png'
import batter from '../images/batter.png'

ChartJs.register(CategoryScale, LinearScale, BarElement)

const PlayerDetails = () => {
  let { playerId } = useParams()
  let navigate = useNavigate()
  const [playerWorkouts, setPlayerWorkouts] = useState([])
  const [chartData, setChartData] = useState({
    labels: ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6'],
    datasets: [{ data: [1, 2, 3, 4, 5, 6] }]
  })
  const [player, setPlayer] = useState([])

  useEffect(() => {
    const playerName = localStorage.getItem('player')
    let selplayer = JSON.parse(playerName)
    console.log(selplayer)
    setPlayer(selplayer)
  }, [])

  useEffect(() => {
    const getSkills = async () => {
      const data = await GetSkillsByPlayerId(playerId)
      setChartData({
        labels: data.map((skill) => skill.skillName),
        datasets: [
          {
            data: data.map((skill) => skill.skillLevel),
            responsive: true,
            backgroundColor: [
              '#f9763d',
              '#f9763d',
              '#f9763d',
              '#f9763d',
              '#f9763d',
              '#f9763d'
            ],
            borderColor: [
              '#F9763D',
              '#F9763D',
              '#F9763D',
              '#F9763D',
              '#F9763D',
              '#F9763D'
            ],
            borderWidth: 1,
            borderSkipped: false,
            borderRadius: 5
          }
        ]
      })
      //   setChartToggle(true)
    }
    getSkills()
  }, [player])

  useEffect(() => {
    const handleWorkouts = async () => {
      const data = await getWorkouts(playerId)
      setPlayerWorkouts(data)
      console.log(data)
    }
    handleWorkouts()
  }, [player])

  const isPlayer = JSON.parse(localStorage.getItem('isPlayer'))

  let feet = player.height / 12
  let feetMath = Math.floor(feet).toFixed(0)
  let inchMath = player.height % 12

  let randomProPic
  let randomPicMath = Math.floor(Math.random() * 3) + 1
  switch (randomPicMath) {
    case 1:
      randomProPic = pitcher
      break
    case 2:
      randomProPic = batter
      break
    case 3:
      randomProPic = fielder
  }

  let secondaryPosAbr
  switch (player.secondaryPosition) {
    case 'Pitcher':
      secondaryPosAbr = 'Pitcher'
      break
    case 'Catcher':
      secondaryPosAbr = 'Catcher'
      break
    case 'First Baseman':
      secondaryPosAbr = '1B'
      break
    case 'Second Baseman':
      secondaryPosAbr = '2B'
      break
    case 'Third Baseman':
      secondaryPosAbr = '3B'
      break
    case 'Short Stop':
      secondaryPosAbr = 'SS'
      break
    case 'Center Fielder':
      secondaryPosAbr = 'CF'
      break
    case 'Right Fielder':
      secondaryPosAbr = 'RF'
  }

  return (
    <div className="player-page">
      <h1 className="player-detail-name">{player.name}</h1>
      <h6 className="player-email">{player.email}</h6>
      <div className="player-info">
        <div className="player-grid">
          <div className="grid-top">
            <h4>Height</h4>
            <h2>
              {feetMath}'{inchMath}"
            </h2>
          </div>
          <div className="empty"></div>
          <div className="grid-bottom">
            <h4>Age</h4>
            <h2>{player.age}</h2>
          </div>
        </div>
        <div className="player-grid">
          <div className="grid-top">
            <h4>Weight</h4>
            <h2>{player.weight} lbs</h2>
          </div>
          <div className="empty"></div>
          <div className="grid-bottom">
            <h4>Active</h4>
            {player.isActive !== true ? <h2>No</h2> : <h2>Yes</h2>}
          </div>
        </div>
        <div className="player-grid">
          <div className="grid-top">
            <h4>Primary Position</h4>
            <h2>{player.primaryPosition}</h2>
          </div>
          <div className="empty"></div>
          <div className="grid-bottom">
            <h4>Secondary Position</h4>
            <h2>{secondaryPosAbr}</h2>
          </div>
        </div>
        <div className="workoutButton">
          <button
            onClick={() => {
              navigate(`/newworkout/${playerId}`)
            }}
          >
            Create a workout for {player.name}
          </button>
        </div>
      </div>
      <div className="player-stats-and-pic">
        <div className="stat-graph">
          <h1 className="skills">Skills</h1>
          <div className="skills-graph">
            <SkillChart chartData={chartData} />
          </div>
        </div>
        <div>
          <h1 className="skills fake">Skills</h1>
          <div className="pic-container">
            {player.proPic !== null ? (
              <img className="pic" src={player.proPic}></img>
            ) : (
              <img className="pic" src={randomProPic}></img>
            )}
          </div>
        </div>
      </div>
      {isPlayer === true ? (
        <div>
          {playerWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              id={workout.id}
              title={workout.title}
              description={workout.description}
              completionDate={workout.completionDate}
              skillIncrease={workout.skillIncrease}
              name={player.name}
              playerId={playerId}
              skillId={workout.skillId}
            />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default PlayerDetails
