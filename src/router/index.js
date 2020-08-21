import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'
import { getToken } from '../plugins/cookies'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    component: () => import('../layouts/default.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/verify-user',
    name: 'EmailVerification',
    component: () => import('../views/EmailVerification.vue')
  }
]

const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes
  })

const router = createRouter()

const whiteList = ['Home', 'Login', 'EmailVerification', 'Register'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      try {
        // get user info
        await store.dispatch('verifyToken')
        next()
      } catch (error) {
        // remove token and go to login page to re-login
        await store.dispatch('logout')
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.name) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})

export default router
