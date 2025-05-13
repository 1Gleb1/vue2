import { Character } from '@/entities/Character/model';
import api from '@/shared/api/api';

export const fetchCharacter = (id: string): Promise<Character> => {
	console.log(
		'Fetching character from:',
		api.defaults.baseURL + `/character/${id}`
	);
	return api
		.get(`/character/${id}`)
		.then(response => {
			console.log('Character response:', response.data);
			return response.data;
		})
		.catch(error => {
			console.error(
				'Error fetching character:',
				error.response?.data || error.message
			);
			throw error;
		});
};
