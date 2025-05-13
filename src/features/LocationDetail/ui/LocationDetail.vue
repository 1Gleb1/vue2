<template>
	<div class="detail">
		<Loading v-if="loading" />
		<Error v-else-if="error" :message="error" />
		<div v-else>
			<h2>{{ location.name }}</h2>
			<p><span class="label">Type:</span> {{ location.type }}</p>
			<p><span class="label">Dimension:</span> {{ location.dimension }}</p>
			<p>
				<span class="label">Residents:</span> {{ location.residents.length }}
			</p>
			<div v-if="residents.length" class="residents-grid">
				<div
					v-for="resident in residents"
					:key="resident.id"
					class="resident-card"
				>
					<img :src="resident.image" alt="Resident Image" />
					<p>{{ resident.name }}</p>
				</div>
			</div>
			<router-link to="/locations">Back to Locations</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { Character } from '@/entities/Character/model';
import { Location } from '@/entities/Location/model';
import api from '@/shared/api/api';
import Error from '@/shared/ui/Error.vue';
import Loading from '@/shared/ui/Loading.vue';
import Vue, { VueConstructor } from 'vue';
import { fetchLocation } from '../api/fetchLocation';

export default (Vue as VueConstructor).extend({
	name: 'LocationDetail',
	components: {
		Loading,
		Error,
	},
	props: {
		id: { type: String, required: true },
	},
	data() {
		return {
			location: {} as Location,
			residents: [] as Character[],
			loading: true,
			error: null as string | null,
		};
	},
	created() {
		this.fetchLocationDetails();
	},
	methods: {
		async fetchLocationDetails() {
			try {
				const locationData = await fetchLocation(this.id);
				this.location = locationData;

				const residentPromises = this.location.residents.map((url: string) => {
					const residentId = url.split('/').pop();
					return api
						.get(`/character/${residentId}`)
						.then(response => response.data);
				});
				this.residents = await Promise.all(residentPromises);
				this.loading = false;
			} catch (error) {
				this.error = 'Failed to load location details';
				this.loading = false;
			}
		},
	},
});
</script>
