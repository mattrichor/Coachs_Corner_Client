import '../Feed.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GetPlayers } from '../services/GetPlayers'
import PlayerCard from '../components/PlayerCard'

const CoachFeed = ({ coach }) => {
  let navigate = useNavigate()
  const [allPlayers, setAllPlayers] = useState([])

  useEffect(() => {
    const handlePlayers = async () => {
      const data = await GetPlayers(coach.id)

      setAllPlayers(data)
      console.log(data)
    }
    handlePlayers()
  }, [coach])

  return (
    <div className="player-cards">
      {allPlayers.map((res) => (
        <PlayerCard
          key={res.id}
          name={res.name}
          email={res.email}
          height={res.height}
          weight={res.weight}
          age={res.age}
          primaryPos={res.primaryPosition}
          secondaryPos={res.secondaryPosition}
          id={res.id}
          isActive={res.isActive}
          proPic={res.proPic}
        ></PlayerCard>
      ))}
    </div>
  )
}

export default CoachFeed
