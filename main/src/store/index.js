import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)

import * as types from './actionTypes'

const store = new Vuex.Store({
  state:{
    token: '',
    user:{}
  },
  mutations:{
    [types.set_token](state,token){
      state.token = token
    },
    [types.set_user](state,user){
      state.user = user
    }
  },
  actions:{
    [types.set_token]({commit},token){
      commit(types.set_token,token)
    },
    [types.set_user]({commit},user){
      commit(types.set_user,user)
    }
  }
})

export default store;
