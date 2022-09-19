import React from 'react'

import { useEffect, useState } from 'react'
import { GetCoaches, AssignCoachToPlayer } from '../services/Coaches'
import { useNavigate } from 'react-router-dom'

const CoachChooser = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [coaches, setCoaches] = useState([])
  const [player, setPlayer] = useState([])

  let navigate = useNavigate()

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  useEffect(() => {
    const results = coaches.filter((coach) =>
      coach.name.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm])

  useEffect(() => {
    const getCoaches = async () => {
      const coaches = await GetCoaches()
      setCoaches(coaches)
      console.log(coaches)
    }
    getCoaches()
  }, [])

  useEffect(() => {
    const playerName = localStorage.getItem('player')
    let selplayer = JSON.parse(playerName)
    console.log(selplayer)
    setPlayer(selplayer)
  }, [])

  const chooseCoach = async (coachId) => {
    const coach = await AssignCoachToPlayer(player.id, coachId)
    navigate(`/players/${player.id}`)
  }

  return (
    <div className="signin-col-ch">
      <h2>New to Coach's Corner?</h2>
      <h3>Search for your coach below:</h3>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchResults.map((coach) => (
        <div className="grid-container">
          <div className="search-item">{coach.name}</div>

          <div className="choose-btn-div">
            <button
              className="choose-btn"
              onClick={() => chooseCoach(coach.id)}
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CoachChooser
