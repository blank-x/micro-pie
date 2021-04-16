import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)

import * as types from './actionTypes'

const store = new Vuex.Store({
  state:{
    token:''
  },
  mutations:{
    [types.set_token](state,token){
      state.token = token
    }
  },
  actions:{
    [types.set_token]({commit},token){
      console.log(token);
      commit(types.set_token,token)
    }
  }
})

export default store;
