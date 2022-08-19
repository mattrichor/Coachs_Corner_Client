import Client from './api'

export const GetCoaches = async () => {
  try {
    const res = await Client.get(`/coaches`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AssignCoachToPlayer = async (playerId, coachId) => {
  try {
    const res = await Client.put(`/coaches/choose/${playerId}/${coachId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
