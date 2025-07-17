import { createApp } from "vue";
import App from "@/App.vue";

// 管理全域變數及狀態資料
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persistedstate";
// 路由
import router from "@/router";

// CSS初始化
import "@/assets/scss/reset.scss";

//前台

// Bootstrap前端視覺套件
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// Sweetalert
import "sweetalert2/dist/sweetalert2.min.css";
// CSS
import "@/assets/scss/general.scss";
import "@/assets/scss/styles.scss";

// JS
import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
import "@/assets/js/script.js";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPersist);
app.use(pinia);
app.use(router);
app.mount("#page-top");
