import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  BButton,
  BSpinner,
  BNavbar,
  BNavbarToggle,
  BNavbarBrand,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BFormInput,
  BCard,
  BCardText,
  VBToggle
} from 'bootstrap-vue';
import store from './store';

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('b-button', BButton);
Vue.component('b-spinner', BSpinner);
Vue.component('b-navbar', BNavbar);
Vue.component('b-collapse', BCollapse);
Vue.component('b-navbar-nav', BNavbarNav);
Vue.component('b-nav-item', BNavItem);
Vue.component('b-navbar-toggle', BNavbarToggle);
Vue.component('b-navbar-brand', BNavbarBrand);
Vue.component('b-form-input', BFormInput);
Vue.component('b-card', BCard);
Vue.component('b-card-text', BCardText);
Vue.directive('b-toggle', VBToggle);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
