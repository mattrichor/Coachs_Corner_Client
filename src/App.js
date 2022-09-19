import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { GetPlayers } from './services/GetPlayers'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import CoachRegister from './pages/CoachRegister'
import PlayerRegister from './pages/PlayerRegister'
import PlayerDetails from './pages/PlayerDetails'
import CoachFeed from './pages/CoachFeed'
import { useNavigate } from 'react-router-dom'
import NewWorkoutForm from './pages/NewWorkoutForm'
import CoachChooser from './pages/CoachChooser'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [coach, setCoach] = useState(null)
  const [allPlayers, setAllPlayers] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [selectedPlayerId, setSelectedPlayerId] = useState(null)
  let navigate = useNavigate()

  const handleLogOut = () => {
    setCoach(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const coach = await CheckSession()
    setCoach(coach)
    toggleAuthenticated(true)
  }

  const choosePlayer = (selected) => {
    setSelectedPlayer(selected)
    setSelectedPlayerId(selected.id)
    console.log(selected)
    localStorage.setItem('player', JSON.stringify(selected))
    navigate(`/players/${selected.id}`)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  useEffect(() => {
    const handlePlayers = async () => {
      const data = await GetPlayers(coach.id)

      setAllPlayers(data)
      console.log(data)
    }
    handlePlayers()
  }, [coach])

  return (
    <div>
      <header>
        <Nav
          authenticated={authenticated}
          coach={coach}
          handleLogOut={handleLogOut}
          player={selectedPlayer}
        />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <SignIn
                setCoach={setCoach}
                toggleAuthenticated={toggleAuthenticated}
                choosePlayer={choosePlayer}
                selectedPlayer={selectedPlayer}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/register/coach" element={<CoachRegister />} />
          <Route path="/register/player" element={<PlayerRegister />} />
          <Route
            path="/coachfeed"
            element={
              <CoachFeed
                coach={coach}
                authenticated={authenticated}
                choosePlayer={choosePlayer}
                allPlayers={allPlayers}
              />
            }
          />
          <Route
            path="/players/:playerId"
            element={<PlayerDetails player={selectedPlayer} />}
          />
          <Route path="/coachChooser" element={<CoachChooser />} />
          <Route
            path="/newworkout/:playerId"
            element={<NewWorkoutForm player={selectedPlayer} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
