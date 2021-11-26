import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import sampleDirective from './directives/sampleDirective';
import ScaleVue from './plugins/scaleVuePlugin';
import './assets/styles/index.scss'

createApp(App)
    .directive("sample-it", sampleDirective)
    .use(ScaleVue)
    .use(store)
    .use(router)
    .mount('#app')
