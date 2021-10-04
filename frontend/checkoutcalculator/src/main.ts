import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import 'bootstrap/scss/bootstrap.scss'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import store from "@/store";

library.add(fas)

createApp(App)
  .component( "font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount("#app");
