import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecondaryView  from '../views/SecondaryView.vue'
import TertiaryView  from '../views/TertiaryView.vue'
import FourthView from '../views/FourthView.vue'
import FifthView from '../views/FifthView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/secondary',
    name: 'secondary',
    component: SecondaryView
  },
  {
    path: '/tertiary',
    name: 'tertiary',
    component: TertiaryView
  },
  {
    path: '/fourth',
    name: 'fourth',
    component: FourthView
  },
    {
    path: '/fifth',
    name: 'fifth',
    component: FifthView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
