import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GetPlayers } from '../services/GetPlayers'

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
  return
  // return (
  //   <div className="player-grid">
  //     CoachFeed
  //     {props.players.map((player) => (
  //       <div
  //         className="player-card"
  //         onClick={() => showPlayer(player)}
  //         key={player.id}
  //       >
  //         <img
  //           style={{ display: 'block' }}
  //           src={player.proPic}
  //           alt={player.name}
  //         />
  //         <h3>{player.name}</h3>
  //       </div>
  //     ))}
  //   </div>
  // )
}

export default CoachFeed
