import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Reports from './components/Reports/Reports'
import CreateReport from './components/Reports/Create-report'
import EditReport from './components/Reports/Edit-report'
import Report from './components/Reports/Report'
import Register from './components/Users/Register'
import Login from './components/Users/Login'
import Chat from './components/Chat/Chat';

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
      path: '/report/report/:id',
      name: 'report',
      component: Report
    },
    {
      path: '/report',
      name: 'reports',
      component: Reports
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/report/create',
      name: 'create-report',
      component: CreateReport
    },
    {
      path: '/report/edit/:id',
      name: 'edit-report',
      component: EditReport
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
