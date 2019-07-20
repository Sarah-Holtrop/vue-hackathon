import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/CaptionHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CaptionHome',
      component: Home
    },
    {
      path: '/thread-page/:postId',
      name: 'thread-page',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/ThreadPage.vue')
      }
    }
  ]
})
