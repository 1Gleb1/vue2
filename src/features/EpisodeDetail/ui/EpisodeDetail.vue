<template>
	<div class="detail">
		<Loading v-if="loading" />
		<Error v-else-if="error" :message="error" />
		<div v-else>
			<h2>{{ episode.name }}</h2>
			<p><span class="label">Air Date:</span> {{ episode.air_date }}</p>
			<p><span class="label">Episode:</span> {{ episode.episode }}</p>
			<p>
				<span class="label">Characters:</span> {{ episode.characters.length }}
			</p>
			<div v-if="characters.length" class="characters-grid">
				<div
					v-for="character in characters"
					:key="character.id"
					class="character-card"
				>
					<img :src="character.image" alt="Character Image" />
					<p>{{ character.name }}</p>
				</div>
			</div>
			<router-link to="/episodes">Back to Episodes</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { Character } from '@/entities/Character/model';
import { Episode } from '@/entities/Episode/model';
import api from '@/shared/api/api';
import Error from '@/shared/ui/Error.vue';
import Loading from '@/shared/ui/Loading.vue';
import Vue, { VueConstructor } from 'vue';
import { fetchEpisode } from '../api/fetchEpisode';

export default (Vue as VueConstructor).extend({
	name: 'EpisodeDetail',
	components: {
		Loading,
		Error,
	},
	props: {
		id: { type: String, required: true },
	},
	data() {
		return {
			episode: {} as Episode,
			characters: [] as Character[],
			loading: true,
			error: null as string | null,
		};
	},
	created() {
		this.fetchEpisodeDetails();
	},
	methods: {
		async fetchEpisodeDetails() {
			try {
				const episodeData = await fetchEpisode(this.id);
				this.episode = episodeData;

				const characterPromises = this.episode.characters.map((url: string) => {
					const characterId = url.split('/').pop();
					return api
						.get(`/character/${characterId}`)
						.then(response => response.data);
				});
				this.characters = await Promise.all(characterPromises);
				this.loading = false;
			} catch (error) {
				this.error = 'Failed to load episode details';
				this.loading = false;
			}
		},
	},
});
</script>
