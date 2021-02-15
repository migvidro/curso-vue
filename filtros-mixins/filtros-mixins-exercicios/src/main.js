import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', (valor) => {
	return `${valor}`.split('').reverse().join('');
});

Vue.mixin({
	data(){
		return {
			global: 'Estou no Mixin Global!'
		}
	},
	created(){
		// console.log('oi');
	}
});

new Vue({
	render: h => h(App)
}).$mount('#app')
