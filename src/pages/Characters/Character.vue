<template>
	<div>
		<CharacterDetail :id="id" />
	</div>
</template>

<script lang="ts">
import CharacterDetail from '@/features/CharacterDetail/ui/CharacterDetail.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CharacterPage',
	components: { CharacterDetail },
	computed: {
		id(): string {
			return this.$route.params.id;
		},
	},
});
</script>
