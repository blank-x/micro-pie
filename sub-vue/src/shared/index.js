import * as sharedTypes from "./types";
import store from "../store";
import * as storeTypes from "../store/actionTypes";


const handlers = {
  [sharedTypes.token](token) {
    console.log(token)
    store.dispatch(storeTypes.set_token,token)
  },
  [sharedTypes.user](user) {
    console.log(user)
    store.dispatch(storeTypes.set_user,user)
  },
}
let setGlobalState = null
let onGlobalStateChange = null
let isInit = true
export const initShared = function (action) {
  if(!action.onGlobalStateChange || !action.setGlobalState){
    console.warn('主、子应用通信连接失败 原因：props 中未传递onGlobalStateChange或者setGlobalState ')
    return
  }
  onGlobalStateChange = action.onGlobalStateChange
  setGlobalState = action.setGlobalState
  onGlobalStateChange((state,prev)=>{

    console.log(state,prev)
    Object.keys(handlers).forEach(key=>{
      if(state[key] !== prev[key] || isInit){
        handlers[key](state[key],prev[key],state,prev)
      }
    })
    isInit = false
  },true);
};

const dispatch = {
  add(user){
    console.log(user)
    setGlobalState({
      user
    })
  }
}
export default dispatch
