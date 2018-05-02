import Home from '../views/Home/Home'
import Source from '../views/Source/Source'
import Tool from '../views/Tool/Tool'
import Login from '../views/Login/Login'
import Create from '../views/create/create'
import Plan from '../views/create/plan/plan'
import Unit from '../views/create/unit/unit'
import Creative from '../views/create/creative/Creative'
import Origin from '../views/origin/origin'
// import Creative from '../views/creative/Creative'

export const routerInfo = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/source',
    name: 'Source',
    component: Source
  },
  {
    path: '/tool',
    name: 'Tool',
    component: Tool
  },
  {
    path: '/origin',
    name: 'Origin',
    component: Origin
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    children: [
      {
        path: 'plan',
        name: 'Plan',
        component: Plan
      },
      {
        path: 'unit',
        name: 'Unit',
        component: Unit
      },
      {
        path: 'creative',
        name: 'Creative',
        component: Creative
      }
    ]
  }
]
