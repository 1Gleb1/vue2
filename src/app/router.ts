import CharacterPage from '@/pages/Characters/Character.vue';
import CharactersPage from '@/pages/Characters/index.vue';
import EpisodePage from '@/pages/Episodes/Episode.vue';
import EpisodesPage from '@/pages/Episodes/index.vue'; // Ensure /index.vue is specified
import LocationsPage from '@/pages/Locations/index.vue';
import LocationPage from '@/pages/Locations/Location.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{ path: '/characters', component: CharactersPage },
	{ path: '/character/:id', component: CharacterPage },
	{ path: '/episodes', component: EpisodesPage },
	{ path: '/episode/:id', component: EpisodePage },
	{ path: '/locations', component: LocationsPage },
	{ path: '/location/:id', component: LocationPage },
	{ path: '/', redirect: '/characters' },
];

export default new VueRouter({ routes });
