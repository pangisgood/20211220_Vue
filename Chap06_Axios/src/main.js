import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// npm i axios bootstrap-vue
