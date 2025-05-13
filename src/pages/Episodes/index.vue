<template>
	<div>
		<h2>Episodes</h2>
		<EpisodeList />
	</div>
</template>

<script lang="ts">
import EpisodeList from '@/features/EpisodeList/ui/EpisodeList.vue';
import Vue, { VueConstructor } from 'vue';

export default (Vue as VueConstructor).extend({
	name: 'EpisodesPage',
	components: {
		EpisodeList,
	},
});
</script>
