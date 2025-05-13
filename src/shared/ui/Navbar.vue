<template>
	<div class="navbar">
		<router-link to="/characters">Characters</router-link>
		<router-link to="/episodes">Episodes</router-link>
		<router-link to="/locations">Locations</router-link>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Navbar',
});
</script>
