import { ApiResponse } from '@/app/types';
import { Episode } from '@/entities/Episode/model';
import api from '@/shared/api/api';

export const fetchEpisodes = (): Promise<ApiResponse<Episode>> => {
	console.log('Fetching episodes from:', api.defaults.baseURL + '/episode');
	return api
		.get('/episode')
		.then(response => {
			console.log('Episodes response:', response.data);
			return response.data;
		})
		.catch(error => {
			console.error(
				'Error fetching episodes:',
				error.response?.data || error.message
			);
			throw error;
		});
};
