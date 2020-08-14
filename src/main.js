import Vue from "vue";
import App from "./App.vue";
import {
  MdField,
  MdCheckbox,
  MdList,
  MdButton,
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

Vue.use(MdField);
Vue.use(MdCheckbox);
Vue.use(MdList);
Vue.use(MdButton);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
