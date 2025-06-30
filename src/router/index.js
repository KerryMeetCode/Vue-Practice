import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import News from "@/views/News.vue";
import Products from "@/views/Products.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/news", component: News },
  { path: "/products", component: Products },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
