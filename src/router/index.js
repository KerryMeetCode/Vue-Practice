import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

// 訪客頁面
import GuestLayout from "@/layouts/guest/GuestLayout.vue";
import Home from "@/views/guest/Home.vue";
import About from "@/views/guest/About.vue";
import News from "@/views/guest/News.vue";
import Products from "@/views/guest/Products.vue";
import Contact from "@/views/guest/Contact.vue";
import Login from "@/views/guest/Login.vue";

// 會員頁面
// import Dashboard from "@/views/member/Dashboard.vue";
// import Orders from "@/views/member/Orders.vue";
// import Profile from "@/views/member/Profile.vue";

const routes = [
  {
    path: "/",
    component: GuestLayout,
    children: [
      { path: "", component: Home },
      { path: "about", component: About },
      { path: "products", component: Products },
      { path: "news", component: News },
      { path: "contact", component: Contact },
      { path: "login", component: Login },
    ],
  },
  // {
  //   path: "/member",
  //   component: MemberLayout,
  //   meta: { requiresAuth: true },
  //   children: [
  //     { path: "dashboard", component: Dashboard },
  //     { path: "orders", component: Orders },
  //     { path: "profile", component: Profile },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 權限守衛
router.beforeEach((to, from, next) => {
  const isLoggedIn = useAuthStore().isLoggedIn; // Pinia 判斷是否登入
  if (to.meta.requiresAuth && !isLoggedIn) {
    return next("/"); // 未登入導回首頁
  }
  next();
});

export default router;
