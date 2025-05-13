<template>
	<div>
		<EpisodeDetail :id="id" />
	</div>
</template>

<script lang="ts">
import EpisodeDetail from '@/features/EpisodeDetail/ui/EpisodeDetail.vue';
import Vue, { VueConstructor } from 'vue';

export default (Vue as VueConstructor).extend({
	name: 'EpisodePage',
	components: {
		EpisodeDetail,
	},
	computed: {
		id(): string {
			return this.$route.params.id;
		},
	},
});
</script>
