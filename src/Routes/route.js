
import { createRouter , createMemoryHistory, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Registro from '../views/registro.vue'



const routes = [

      {path: '/',component: Home},
      {path: '/login',component: Login},
      {path: '/registro',component: Registro},

]

const router = createRouter({
      routes,
      history : createWebHistory()
})

export default router;