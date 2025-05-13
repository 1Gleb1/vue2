<template>
	<div>
		<LocationDetail :id="id" />
	</div>
</template>

<script lang="ts">
import LocationDetail from '@/features/LocationDetail/ui/LocationDetail.vue';
import Vue, { VueConstructor } from 'vue';

export default (Vue as VueConstructor).extend({
	name: 'LocationPage',
	components: {
		LocationDetail,
	},
	computed: {
		id(): string {
			return this.$route.params.id;
		},
	},
});
</script>
