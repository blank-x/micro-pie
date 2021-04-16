/*
* 父子模块的通信 统一处理 不要散落在代码中
*
* */
import { initGlobalState } from "qiankun";
import store from '../store'
import * as storeTypes from '../store/actionTypes'
import * as sharedTypes from './types'
let initialState = {
  token:null
};

const actions = initGlobalState({type:'init',payload:initialState});

const handlers = {
  [sharedTypes.login](token) {
    store.dispatch(storeTypes.set_token,token)
  },
}

actions.onGlobalStateChange(function ({type,payload}) {
  if(!handlers[type]){
    console.warn('type类型错误')
    return
  }
  const state = {...initialState,...payload}

  handlers[type](payload,state)

})

const dispatch = {
  setToken(token){
    actions.setGlobalState({
      type:[sharedTypes.login],
      payload:token
    })
  }
}
export default dispatch
