import { apiClient } from '@/config/axios'

export const searchFlights = async (payload) => {
  let errorScenario = ''
  try {
    const { data } = await apiClient.post('/api/flights/search', payload, {
      params: {
        scenario: errorScenario ? errorScenario : undefined,
      },
    })

    console.log(data)
    return data.data
  } catch (error) {
    console.error('Search flights failed:', error)
    throw error
  }
}
