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
  }, [])
  // const showPlayer = (player) => {
  //   navigate(`${player.id}`)
  // }
  return (
    <div className="player-card">
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
          likes={res.likes}
          isActive={res.isActive}
        ></PlayerCard>
      ))}
    </div>
  )
}

export default CoachFeed
