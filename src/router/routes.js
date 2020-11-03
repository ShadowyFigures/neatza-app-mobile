
import users from '../assets/users'

const defaultRoute = {
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    { path: '', component: () => import('pages/Index.vue') }
  ]
}

const catchAllRoute = {
  path: '*',
  component: () => import('pages/Error404.vue')
}

const routes = []
routes.push(defaultRoute)
users.forEach(user => {
  routes.push({
    path: '/' + user.name.toLowerCase(),
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/User.vue') }
    ]
  })
})
routes.push(catchAllRoute)

export default routes
