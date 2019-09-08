import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Reports from './components/Reports/Reports'
import Week from './components/Reports/Week'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/report/week/:id',
      name: 'week',
      component: Week
    },
    {
      path: '/report',
      name: 'reports',
      component: Reports
    },

  ]
})
