import { NameUrl } from '@/app/types';

export interface Character {
	id: number;
	name: string;
	species: string;
	status: string;
	gender: string;
	origin: NameUrl;
	location: NameUrl;
	episode: string[];
	image: string;
}
