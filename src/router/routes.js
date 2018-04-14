
import users from '../assets/users'

const defaultRoute = {
  path: '/',
  component: () => import('layouts/default'),
  children: [
    { path: '', component: () => import('pages/index') }
  ]
}

const catchRoute = {
  path: '*',
  component: () => import('pages/404')
}

const routes = []
routes.push(defaultRoute)
users.forEach(user => {
  routes.push({
    path: '/' + user.name.toLowerCase(),
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/user') }
    ]
  })
})
routes.push(catchRoute)

export default routes
