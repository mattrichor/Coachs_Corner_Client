import Client from './api'

export const GetPlayers = async (coachId) => {
  try {
    const res = await Client.get(`/players/${coachId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
