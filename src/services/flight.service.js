import {apiClient} from '../config/axios';

export const searchFlights = async (payload) =>{
    console.log('Searching flights with payload:', payload);
    const response = await apiClient.post('api/flights/search', payload);

    return response.data;
};