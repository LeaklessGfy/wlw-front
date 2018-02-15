import Vue from "vue";
import { sync } from "vuex-router-sync";
import BootstrapVue from "bootstrap-vue";
import Icon from "vue-awesome/components/Icon";
import App from "components/App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-awesome/icons";

Vue.use(BootstrapVue);
sync(store, router);

Vue.component("icon", Icon);
Vue.component("app-nav", require("./components/Common/Navbar"));
Vue.component("app-mode", require("./components/Mode/Mode"));
Vue.component("app-wrestler", require("./components/Wrestler/Wrestler"));
Vue.component(
  "app-wrestler-list",
  require("./components/Wrestler/WrestlerList")
);
Vue.component(
  "app-wrestler-stat",
  require("./components/Wrestler/WrestlerStat")
);
Vue.component("app-select-mode", require("./components/Subview/SelectMode"));
Vue.component(
  "app-select-wrestler",
  require("./components/Subview/SelectWrestler")
);
Vue.component("app-play", require("./components/Subview/Play"));

const app = new Vue({
  router,
  store,
  ...App
});

export { app, router, store };
