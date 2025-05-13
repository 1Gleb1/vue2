<template>
	<div>
		<h2>Locations</h2>
		<LocationList />
	</div>
</template>

<script lang="ts">
import LocationList from '@/features/LocationList/ui/LocationList.vue';
import Vue, { VueConstructor } from 'vue';

export default (Vue as VueConstructor).extend({
	name: 'LocationsPage',
	components: {
		LocationList,
	},
});
</script>
