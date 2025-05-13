<template>
	<div>
		<h2>Characters</h2>
		<CharacterList />
	</div>
</template>

<script lang="ts">
import CharacterList from '@/features/CharacterList/ui/CharacterList.vue';
import Vue, { VueConstructor } from 'vue';

export default (Vue as VueConstructor).extend({
	name: 'CharactersPage',
	components: {
		CharacterList,
	},
});
</script>
