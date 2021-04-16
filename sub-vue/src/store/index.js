import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)

import * as types from './actionTypes'

const store = new Vuex.Store({
  state:{
    user:{},
    token:''
  },
  mutations:{
    [types.set_user](state,user){
      console.log(user)
      state.user = user
    },
    [types.set_token](state,token){
      state.token = token
    }
  },
  actions:{
    [types.set_user]({commit},user){
      console.log(user);
      commit(types.set_user,user)
    },
    [types.set_token]({commit},token){
      console.log(token);
      commit(types.set_token,token)
    },
  }
})

export default store;
