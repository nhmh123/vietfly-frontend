import { apiClient } from '@/config/axios'

export const searchFlights = async (payload) => {
  // console.log('Searching flights with payload:', payload)
  try {
    const { data } = await apiClient.post('/api/flight/search', payload)

    console.log(data)
    return data
  } catch (error) {
    console.error('Search flights failed:', error)
    throw error
  }
}
