import Client from './api'

export const GetSkillsByPlayerId = async (playerId) => {
  try {
    const res = await Client.get(`/skills/${playerId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
