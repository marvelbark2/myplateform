import { createRouter , createWebHistory } from "vue-router";
import Hello from "@/components/Hello";
import Home from "@/components/Home";
import Login from "@/components/Auth/Login";
import authMiddleware from './AuthMiddleware';
import EpvAdd from "@/pages/Notes/Ecue/Epv/Add";
import EpvList from "@/pages/Notes/Ecue/Epv/List";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
        guest: true
    }
  },
  {
    path: "/hello",
    name: "Hello",
    component: Hello,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ecue/epv/list",
    name: "EpvList",
    component: EpvList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ecue/epv/add",
    name: "EpvAdd",
    component: EpvAdd,
    meta: {
      requiresAuth: true
    }
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});
authMiddleware(router);

export default router;