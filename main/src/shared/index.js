/*
* 父子模块的通信 统一处理 不要散落在代码中
*
* */
import { initGlobalState } from "qiankun";
import store from '../store'
import * as storeTypes from '../store/actionTypes'
import * as shareTypes from './types'
import Cookies from 'js-cookie'

let initialState = {
  [shareTypes.token]:  Cookies.get('token') || '',
  [shareTypes.user]:{},
};


const actions = initGlobalState(initialState);

const handlers = {
  [shareTypes.token](token) {
    store.dispatch(storeTypes.set_token,token)
  },
  [shareTypes.user](user){
    store.dispatch(storeTypes.set_user,user)
  }
}

actions.onGlobalStateChange((state,prev)=> {

  Object.keys(handlers).forEach(key=>{
    if(state[key] !== prev[key]){
      handlers[key](state[key],prev[key],state,prev)
    }
  })

})


const wrappedSetGlobalState = (...arg)=>{
  // if(!Object.prototype.hasOwnProperty.call(initialState,key)){
  //   console.error('主子应用通信失败，原因：initialState中不包含该属性')
  //   return
  // }
  console.log(arg)
  actions.setGlobalState(arg)
}

const dispatch = {
  setToken(token){
    wrappedSetGlobalState({[shareTypes.token]:token})
  },
  setUser(user){
    wrappedSetGlobalState({[shareTypes.user]:user})
  }
}

export default dispatch

