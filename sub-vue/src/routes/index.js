import List from '@/pages/list'
import Detail from '@/pages/detail'

console.log(Detail);
const routes = [
  {
    name:'home',
    path:'/',
    redirect:'/list'
  },
  {
    name:'list',
    path:'/list',
    component:List
  },
  {
    name:'detail',
    path:'/detail',
    component: Detail
  }
]

export default routes
