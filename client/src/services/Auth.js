import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    return res.data.coach
  } catch (error) {
    throw error
  }
}

export const RegisterCoach = async (data) => {
  try {
    const res = await Client.post('/auth/register/coach', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const RegisterPlayer = async (data) => {
  try {
    const res = await Client.post('/auth/register/player', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
