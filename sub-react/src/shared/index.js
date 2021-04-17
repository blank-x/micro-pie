import store from "../store";

import create from './sub-helper'
const data = {
  mutation:{
    token(token){
      store.dispatch({type:'setToken',payload:token})
    },
    user(user){
      store.dispatch({type:'setUser',payload:user})
    }
  }
}

let dispatch = {}

export default dispatch

export function initShared(actions){
  const {token,user} = create({...data,actions})
  dispatch.setToken = token
  // dispatch.setUser = user
}
