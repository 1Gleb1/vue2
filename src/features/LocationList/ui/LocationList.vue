<template>
	<div>
		<Loading v-if="loading" />
		<Error v-else-if="error" :message="error" />
		<div v-else class="list">
			<LocationCard
				v-for="location in locations"
				:key="location.id"
				:location="location"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { Location } from '@/entities/Location/model';
import LocationCard from '@/entities/Location/ui/LocationCard.vue';
import Error from '@/shared/ui/Error.vue';
import Loading from '@/shared/ui/Loading.vue';
import Vue, { VueConstructor } from 'vue';
import { fetchLocations } from '../api/fetchLocations';

export default (Vue as VueConstructor).extend({
	name: 'LocationList',
	components: {
		LocationCard,
		Loading,
		Error,
	},
	data() {
		return {
			locations: [] as Location[],
			loading: true,
			error: null as string | null,
		};
	},
	created() {
		fetchLocations()
			.then(data => {
				this.locations = data.results;
				this.loading = false;
			})
			.catch(() => {
				this.error = 'Failed to load locations';
				this.loading = false;
			});
	},
});
</script>
