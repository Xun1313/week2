import Vue from "vue";
import App from "./App.vue";
/* import 'bootstrap'; */
import './assets/bootstrap/docs.css';
import './assets/bootstrap/bootstrap.css';
import './assets/bootstrap/bootstrap-reboot.css';
import './assets/bootstrap/bootstrap-grid.css';


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
