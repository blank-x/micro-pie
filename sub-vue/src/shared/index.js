import store from "../store";
import * as storeTypes from "../store/actionTypes";
import create from './sub-helper'
const data = {
  mutation:{
    token(token){
      store.dispatch(storeTypes.set_token,token)
    },
    user(user){
      store.dispatch(storeTypes.set_user,user)
    }
  }
}

let dispatch = {}

export default dispatch

export function initShared(actions){
  const {token,user} = create({...data,actions})
  dispatch.setToken = token
  dispatch.setUser = user
}
