import Client from './api'

export const getWorkouts = async (playerId) => {
  try {
    const res = await Client.get(`/workout/${playerId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const allWorkouts = async () => {
  try {
    const res = await Client.get('/workout')
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleSubmit = async (playerId) => {
  try {
    const res = await Client.post(`/workout/${playerId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleDelete = async (playerId) => {
  try {
    const res = await Client.delete(`/workout/${playerId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleUpdate = async (playerId) => {
  try {
    const res = await Client.put(`/workout/${playerId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
