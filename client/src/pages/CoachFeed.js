import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CoachFeed = () => {
  let navigate = useNavigate()
  const [viewAllPlayers, setViewAllPlayers] = useState([])

  useEffect(() => {
    const getAllPlayers = async () => {}
  })
  return <div>CoachFeed</div>
}

export default CoachFeed
