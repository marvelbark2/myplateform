import { createRouter , createWebHistory } from "vue-router";
import Hello from "@/components/Hello";
import Home from "@/components/Home";
import Login from "@/components/Auth/Login";
import SemestreList from "@/pages/Notes/Semestre/List";
import authMiddleware from './AuthMiddleware';
import EpvList from "@/pages/Notes/Ecue/Epv";

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
    path: "/semestre/list",
    name: "SmestreList",
    component: SemestreList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ecue/epv/form/:id",
    name: "epvList",
    component: EpvList,
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