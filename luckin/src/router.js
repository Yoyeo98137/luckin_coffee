import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import About from './views/about'
import Corp from './views/corp'
import News from './views/news'
import Head from './components/header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',component: Index },
    { path: '/index',component: Index },
    { path: '/about',component: About },
    { path: '/corp',component: Corp },
    { path: '/news',component: News },
    { path: '/head',component: Head },
    // path: '*',component: 404
  ]
})
