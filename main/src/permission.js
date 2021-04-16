import router from './router'
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css'// Progress 进度条样式
import Cookies from 'js-cookie'

const whiteList = ['/login'];// 不重定向白名单
router.beforeEach((to, from, next) => {
  // NProgress.start();// 开启Progress
  let token = Cookies.get('token')

  if(token){
    if (to.path === '/login') {
      next({path: '/'})
      return
    }else{
      next()
      return
    }

  }else {
    if(whiteList.indexOf(to.path) !== -1){
      next()
      return
    }else{
      next({path: '/login'})
      return
    }
  }
});

router.afterEach(() => {
  // NProgress.done() // 结束Progress
});
