<template>
	<div class="card">
		<div class="card-content">
			<h3>{{ location.name }}</h3>
			<p>Type: {{ location.type }}</p>
			<p>Dimension: {{ location.dimension }}</p>
			<router-link :to="'/location/' + location.id">View Details</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import { Location } from '../model';

export default (Vue as VueConstructor).extend({
	name: 'LocationCard',
	props: {
		location: { type: Object as () => Location, required: true },
	},
});
</script>
