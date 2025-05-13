import { ApiResponse } from '@/app/types';
import { Location } from '@/entities/Location/model';
import api from '@/shared/api/api';

export const fetchLocations = (): Promise<ApiResponse<Location>> => {
	console.log('Fetching locations from:', api.defaults.baseURL + '/location');
	return api
		.get('/location')
		.then(response => {
			console.log('Locations response:', response.data);
			return response.data;
		})
		.catch(error => {
			console.error(
				'Error fetching locations:',
				error.response?.data || error.message
			);
			throw error;
		});
};
