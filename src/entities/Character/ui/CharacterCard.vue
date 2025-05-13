<template>
	<div class="card">
		<img :src="character.image" alt="Character Image" />
		<div class="card-content">
			<h3>{{ character.name }}</h3>
			<p>Species: {{ character.species }}</p>
			<router-link :to="'/character/' + character.id">View Details</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import { Character } from '../model';

export default (Vue as VueConstructor).extend({
	name: 'CharacterCard',
	props: {
		character: { type: Object as () => Character, required: true },
	},
});
</script>
