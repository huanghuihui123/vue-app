import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import { postMessage } from "../utils/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      title: "Login"
    }
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
    meta: {
      title: "Register"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // ...
  if (to.path == "/login" || to.path == "/register") {
    next();
  } else {
    const token = sessionStorage.getItem("token");
    if (token) {
      // if (to.meta && to.meta.title) {
      //   postMessage({
      //     title: to.meta.title,
      //   });
      // }
      next();
    } else {
      router.push("/login");
    }
  }
});

export default router;
