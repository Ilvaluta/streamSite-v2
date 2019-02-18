import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import Home from '@/components/Home'
import noStream from '@/components/noStream'

Vue.use(Router)

 export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'noStream',
      component: noStream,
    },
    {
      path: '/:streamer',
      name: 'Home',
      component: Home,
    }
  ]
})
