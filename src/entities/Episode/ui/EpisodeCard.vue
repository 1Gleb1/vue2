<template>
	<div class="card">
		<div class="card-content">
			<h3>{{ episode.name }}</h3>
			<p>Air Date: {{ episode.air_date }}</p>
			<p>Episode: {{ episode.episode }}</p>
			<router-link :to="'/episode/' + episode.id">View Details</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import { Episode } from '../model';

export default (Vue as VueConstructor).extend({
	name: 'EpisodeCard',
	props: {
		episode: { type: Object as () => Episode, required: true },
	},
});
</script>
