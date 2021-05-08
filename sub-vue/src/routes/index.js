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
  },
  {
    name:'detail3',
    path:'/detail3',
    component: Detail
  }
]

export default routes
