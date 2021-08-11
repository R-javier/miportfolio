import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cards from "../components/Cards.vue"
import Sobremi from "../components/Sobremi.vue"
import Contact from "../components/Contact.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/proyecto",
    name: "Cards",
    component: Cards,
  },
  {
    path: "/sobre-mi",
    name: "Sobremi",
    component: Sobremi,
  },
  {
    path: "/contacto",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
