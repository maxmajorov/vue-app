import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloWorld from "../components/HelloWorld.vue";
import ProductPage from "../views/ProductPage.vue";
import ErrorPage from "../views/ErrorPage.vue";
import CartPage from "../views/CartPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/test",
    name: "test",
    component: HelloWorld,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
    props: true,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutPage,
    props: true,
  },
  {
    path: "/product/:id",
    component: ProductPage,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  //history: createWebHistory(process.env.BASE_URL),
  //history: createWebHashHistory(process.env.BASE_URL),
  //history: createMemoryHistory(process.env.BASE_URL),
  routes,
});

export default router;
