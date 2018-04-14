
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
routes.push(catchRoute)

export default routes
