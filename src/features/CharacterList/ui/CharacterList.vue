<template>
	<div>
		<Loading v-if="loading" />
		<Error v-else-if="error" :message="error" />
		<div v-else class="list">
			<CharacterCard
				v-for="character in characters"
				:key="character.id"
				:character="character"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { Character } from '@/entities/Character/model';
import CharacterCard from '@/entities/Character/ui/CharacterCard.vue';
import Error from '@/shared/ui/Error.vue';
import Loading from '@/shared/ui/Loading.vue';
import Vue, { VueConstructor } from 'vue';
import { fetchCharacters } from '../api/fetchCharacters';

export default (Vue as VueConstructor).extend({
	name: 'CharacterList',
	components: {
		CharacterCard,
		Loading,
		Error,
	},
	data() {
		return {
			characters: [] as Character[],
			loading: true,
			error: null as string | null,
		};
	},
	created() {
		fetchCharacters()
			.then(data => {
				this.characters = data.results;
				this.loading = false;
			})
			.catch(() => {
				this.error = 'Failed to load characters';
				this.loading = false;
			});
	},
});
</script>
