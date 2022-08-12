import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import CoachRegister from './pages/CoachRegister'
import PlayerRegister from './pages/PlayerRegister'
import CoachFeed from './pages/CoachFeed'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [coach, setCoach] = useState(null)

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

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  return (
    <div>
      <header>
        <Nav
          authenticated={authenticated}
          coach={coach}
          handleLogOut={handleLogOut}
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
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/register/coach" element={<CoachRegister />} />
          <Route path="/register/player" element={<PlayerRegister />} />
          <Route
            path="/coachfeed"
            element={<CoachFeed coach={coach} authenticated={authenticated} />}
          />
          <Route />
        </Routes>
      </main>
    </div>
  )
}

export default App
