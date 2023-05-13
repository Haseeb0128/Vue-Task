import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../components/Admin.vue'
import User from '../components/User.vue'
import Login from '../components/Login.vue'
import AddUser from '../components/AddUser.vue'
import EditUser from '../components/EditUser.vue'
import AddTodo from '../components/AddTodo.vue'
import EditTodo from '../components/EditTodo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
     name:'User',
      component:User
    },
    {
      path: '/admin',
     name:'Admin',
      component:Admin
    },
    {
      path:'/adduser',
      name:'AddUser',
      component:AddUser
    },
    {
      path:'/edituser/:id',
      name:'EditUser',
      component:EditUser
    },
    {
      path:'/addtodo',
      name:'AddTodo',
      component:AddTodo
    },
    {
      path:'/edittodo/:id',
      name:'EditTodo',
      component:EditTodo
    }

  ]
})

export default router
