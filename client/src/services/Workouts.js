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

export const handleSubmit = async (playerId, data) => {
  try {
    const res = await Client.post(`/workout/${playerId}`, data)
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

export const handleUpdate = async (
  playerId,
  title,
  description,
  completionDate,
  skillIncrease
) => {
  try {
    const res = await Client.put(`/workout/${playerId}`, {
      title,
      description,
      completionDate,
      skillIncrease
    })
    return res.data
  } catch (error) {
    throw error
  }
}
