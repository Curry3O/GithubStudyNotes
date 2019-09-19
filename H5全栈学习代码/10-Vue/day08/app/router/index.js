import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Index from '@/components/index'
import Category from '@/components/category'
import Article from '@/components/article'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[{
        path:'/index',
        name:'Index',
        component:Index
      },{
        path:'/category',
        name:'Category',
        component: Category
      },{
        path:'/article',
        name:'Article',
        component: Article
      },{
        path:'/user',
        name:'User',
        component:User
      }]
    }
  ]
})
