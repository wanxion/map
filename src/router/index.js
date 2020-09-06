import Vue from 'vue'
import VueRouter from 'vue-router'
import Address from '../views/Address/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Address',
    component: Address
  }
]

const router = new VueRouter({
  routes
})

export default router
