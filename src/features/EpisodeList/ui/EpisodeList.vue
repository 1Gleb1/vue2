<template>
	<div>
		<Loading v-if="loading" />
		<Error v-else-if="error" :message="error" />
		<div v-else class="list">
			<EpisodeCard
				v-for="episode in episodes"
				:key="episode.id"
				:episode="episode"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { Episode } from '@/entities/Episode/model';
import EpisodeCard from '@/entities/Episode/ui/EpisodeCard.vue';
import Error from '@/shared/ui/Error.vue';
import Loading from '@/shared/ui/Loading.vue';
import Vue, { VueConstructor } from 'vue';
import { fetchEpisodes } from '../api/fetchEpisodes';

export default (Vue as VueConstructor).extend({
	name: 'EpisodeList',
	components: {
		EpisodeCard,
		Loading,
		Error,
	},
	data() {
		return {
			episodes: [] as Episode[],
			loading: true,
			error: null as string | null,
		};
	},
	created() {
		fetchEpisodes()
			.then(data => {
				this.episodes = data.results;
				this.loading = false;
			})
			.catch(() => {
				this.error = 'Failed to load episodes';
				this.loading = false;
			});
	},
});
</script>
