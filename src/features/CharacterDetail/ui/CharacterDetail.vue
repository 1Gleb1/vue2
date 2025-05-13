<template>
	<div class="detail">
		<Loading v-if="loading" />
		<Error v-else-if="error" :message="error" />
		<div v-else>
			<img :src="character.image" alt="Character Image" />
			<h2>{{ character.name }}</h2>
			<p><span class="label">Status:</span> {{ character.status }}</p>
			<p><span class="label">Species:</span> {{ character.species }}</p>
			<p><span class="label">Gender:</span> {{ character.gender }}</p>
			<p><span class="label">Origin:</span> {{ character.origin.name }}</p>
			<p><span class="label">Location:</span> {{ character.location.name }}</p>
			<p>
				<span class="label">Appears in:</span>
				{{ character.episode.length }} episodes
			</p>
			<div v-if="episodes.length" class="characters-grid">
				<div
					v-for="episode in episodes"
					:key="episode.id"
					class="character-card"
				>
					<p>{{ episode.name }}</p>
				</div>
			</div>
			<router-link to="/characters">Back to Characters</router-link>
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
import { fetchCharacter } from '../api/fetchCharacter';

export default (Vue as VueConstructor).extend({
	name: 'CharacterDetail',
	components: {
		Loading,
		Error,
	},
	props: {
		id: { type: String, required: true },
	},
	data() {
		return {
			character: {} as Character,
			episodes: [] as Episode[],
			loading: true,
			error: null as string | null,
		};
	},
	created() {
		this.fetchCharacterDetails();
	},
	methods: {
		async fetchCharacterDetails() {
			try {
				const characterData = await fetchCharacter(this.id);
				this.character = characterData;

				const episodePromises = this.character.episode.map((url: string) => {
					const episodeId = url.split('/').pop();
					return api
						.get(`/episode/${episodeId}`)
						.then(response => response.data);
				});
				this.episodes = await Promise.all(episodePromises);
				this.loading = false;
			} catch (error) {
				this.error = 'Failed to load character details';
				this.loading = false;
			}
		},
	},
});
</script>
