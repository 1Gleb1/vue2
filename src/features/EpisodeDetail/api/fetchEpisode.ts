import { Episode } from '@/entities/Episode/model';
import api from '@/shared/api/api';

export const fetchEpisode = (id: string): Promise<Episode> => {
	console.log(
		'Fetching episode from:',
		api.defaults.baseURL + `/episode/${id}`
	);
	return api
		.get(`/episode/${id}`)
		.then(response => {
			console.log('Episode response:', response.data);
			return response.data;
		})
		.catch(error => {
			console.error(
				'Error fetching episode:',
				error.response?.data || error.message
			);
			throw error;
		});
};
