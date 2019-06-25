import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'

Vue.use(Router)

const vueRouter =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    }
  ]
})

vueRouter.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default vueRouter;
