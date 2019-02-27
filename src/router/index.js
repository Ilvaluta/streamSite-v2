import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import noStream from '@/views/noStream'
import noUser from '@/views/noUser'
import Check from '@/views/Check'
import Home from '@/views/Home'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'noStream',
      component: noStream,
    },
    {
      path: '/:streamer',
      name: 'Check',
      component: Check,
    },
    {
      path: '/nouser',
      name: 'noUser',
      component: noUser,
    },
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test,
    // }
  ]
})

export default router
