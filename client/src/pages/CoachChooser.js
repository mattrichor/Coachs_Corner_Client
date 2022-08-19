import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import { GetCoaches, AssignCoachToPlayer } from '../services/Coaches'

const CoachChooser = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [coaches, setCoaches] = useState([])
  const [player, setPlayer] = useState([])
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
    console.log(coach)
  }

  return (
    <div className="input-wrapper">
      <h2>New to Coach's Corner?</h2>
      <h3>Search for your coach below:</h3>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((coach) => (
          <li className="search-item">
            {coach.name}
            <button
              className="choose-btn"
              onClick={() => chooseCoach(coach.id)}
            >
              Choose Coach
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CoachChooser
