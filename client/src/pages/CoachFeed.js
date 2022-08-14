import '../Feed.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GetPlayers } from '../services/GetPlayers'
import { Routes, Route } from 'react-router-dom'
import PlayerCard from '../components/PlayerCard'
import PlayerDetails from './PlayerDetails'

const CoachFeed = ({ coach, choosePlayer, allPlayers }) => {
  // const [allPlayers, setAllPlayers] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState()

  // const choosePlayer = (selected) => {
  //   setSelectedPlayer(selected)
  //   navigate(`/players/${selected.id}`)
  // }

  // useEffect(() => {
  //   const handlePlayers = async () => {
  //     const data = await GetPlayers(coach.id)

  //     setAllPlayers(data)
  //     console.log(data)
  //   }
  //   handlePlayers()
  // }, [coach])

  return (
    <div className="player-cards">
      {allPlayers.map((player) => (
        <div onClick={() => choosePlayer(player)}>
          <PlayerCard
            key={player.id}
            name={player.name}
            email={player.email}
            height={player.height}
            weight={player.weight}
            age={player.age}
            primaryPos={player.primaryPosition}
            secondaryPos={player.secondaryPosition}
            id={player.id}
            isActive={player.isActive}
            proPic={player.proPic}
            player={player}
          ></PlayerCard>
        </div>
      ))}
    </div>
  )
}

export default CoachFeed
