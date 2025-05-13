import { Location } from '@/entities/Location/model';
import api from '@/shared/api/api';

export const fetchLocation = (id: string): Promise<Location> => {
	console.log(
		'Fetching location from:',
		api.defaults.baseURL + `/location/${id}`
	);
	return api
		.get(`/location/${id}`)
		.then(response => {
			console.log('Location response:', response.data);
			return response.data;
		})
		.catch(error => {
			console.error(
				'Error fetching location:',
				error.response?.data || error.message
			);
			throw error;
		});
};
