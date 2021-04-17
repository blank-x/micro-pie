import store from '../store'
import * as storeTypes from '../store/actionTypes'
import Cookies from 'js-cookie'
import create from './main-helper'
const data = {
  initialState:{
    token:Cookies.get('token') || '',
    user:{}
  },
  mutation:{
    token(token){
      store.dispatch(storeTypes.set_token,token)
    },
    user(user){
      store.dispatch(storeTypes.set_user,user)
    }
  }
}

const {token:setToken,user:setUser} = create(data)

export default {
  setToken,
  setUser
}

