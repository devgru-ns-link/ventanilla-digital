import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import es from 'vee-validate/dist/locale/es.json'
import * as rules from 'vee-validate/dist/rules'
import './vee-validate'
import 'bulma-floating-button/dist/css/bulma-floating-button.min.css'
/* Service Worker */
import './registerServiceWorker'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from 'vee-validate'
import BInputWithValidation from '@/components/inputs/BInputWithValidation'
import BSelectWithValidation from '@/components/inputs/BSelectWithValidation'
import BCheckboxesWithValidation from '@/components/inputs/BCheckboxesWithValidation'

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

localize('es', es)
Vue.use(Buefy)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('BInputWithValidation', BInputWithValidation)
Vue.component('BSelectWithValidation', BSelectWithValidation)
Vue.component('BCheckboxesWithValidation', BCheckboxesWithValidation)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
