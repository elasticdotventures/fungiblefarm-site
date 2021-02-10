import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// ...


createApp(App).use(store).use(router).mount('#app')



/* 
	import { SVG } from '@svgdotjs/svg.js'
	// import '@svgdotjs/svg.draggable.js'
	var draw = SVG().addTo('#drawing')
	var rect = draw.rect(100, 100).attr({ fill: '#f06' })
*/

// code from https://github.com/vuejs/vue-devtools/issues/1244
// devtools.ts
/* import { App, Plugin } from 'vue';

const devtools: Plugin = {
	install(app: App) {
		// @ts-ignore
		if (process.env.NODE_ENV === 'development' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
			// @ts-ignore
			window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
		}
	},
};

export { devtools };
*/