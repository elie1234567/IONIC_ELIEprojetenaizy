import { createRouter, createWebHistory } from '@ionic/vue-router';
import CrudList from '@/views/crudlist.vue';
import AddCrud from '@/views/AddCrud.vue';
import ModCrud from '@/views/ModCrud.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue'; 
import MainMenu from '@/views/MainMenu.vue';


const routes= [
  {
    path: '/',
    redirect: '/login' 
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login, 
  },
  {
    path: '/mainmenu',
    name: 'MainMenu',
    component: MainMenu
  },
  {
    path: '/list',
    name: 'CrudList',
    component: CrudList
  },
  {
    path: '/add',
    name: 'AddCrud',
    component: AddCrud
  },
  {
    path: '/modcrud/:crudId',
    name: 'ModCrud',
    component: ModCrud
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
