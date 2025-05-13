<template>
	<div>
		<Navbar />
		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
import Navbar from '@/shared/ui/Navbar.vue';
import Vue from 'vue';

export default Vue.extend({
	name: 'App',
	components: { Navbar },
});
</script>
