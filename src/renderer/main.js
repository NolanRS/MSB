import Vue from 'vue'
import axios from 'axios'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'


import App from './App'
import router from './router'
import store from './store'
import VueMaterial from "vue-material"
import BootstrapVue from 'bootstrap-vue'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
    components: {App},
    router,
    store,
    VueMaterial,
    BootstrapVue,
    template: '<App/>'
}).$mount('#app')
