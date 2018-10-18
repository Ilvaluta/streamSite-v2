import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import Home from '@/components/Home'

Vue.use(Router)

 export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:streamer',
      name: 'Home',
      component: Home,
    }
  ]
})
