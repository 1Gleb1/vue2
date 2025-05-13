import { ApiResponse } from '@/app/types';
import { Character } from '@/entities/Character/model';
import api from '@/shared/api/api';

export const fetchCharacters = (): Promise<ApiResponse<Character>> => {
	console.log('Fetching characters from:', api.defaults.baseURL + '/character');
	return api
		.get('/character')
		.then(response => {
			console.log('Characters response:', response.data);
			return response.data;
		})
		.catch(error => {
			console.error(
				'Error fetching characters:',
				error.response?.data || error.message
			);
			throw error;
		});
};
