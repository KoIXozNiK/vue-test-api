import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/index.vue'
import Comments from './pages/comments/index.vue'
import Comment from './pages/comment/index.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/comments',
      name: 'Comments',
      component: Comments
    },
    {
      path: '/comment/:id',
      name: 'Comment',
      component: Comment
    },

  ]
})
