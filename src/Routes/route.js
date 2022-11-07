
import { createRouter , createMemoryHistory, createWebHistory } from 'vue-router'
import { useUserStore } from '../store/user';
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Registro from '../views/registro.vue'

const requireAuth = async (to,from , next) => {
      const userStore = useUserStore();
      userStore.loadingSession = true;
      const user = await userStore.currentUser();
      if (user) {
          next();
      } else {
          next("/login");
      }
      userStore.loadingSession = false;
}




const routes = [

      {path: '/',component: Home,beforeEnter: requireAuth
            // ...
      },
      {path: '/login',component: Login},
      {path: '/registro',component: Registro},

]

const router = createRouter({
      routes,
      history : createWebHistory()
})

export default router;