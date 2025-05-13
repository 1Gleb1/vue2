import App from '@/app/App.vue';
import router from '@/app/router';
import '@/shared/styles/index.css';
import Vue from 'vue';

Vue.config.productionTip = false;

Vue.use(router);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
