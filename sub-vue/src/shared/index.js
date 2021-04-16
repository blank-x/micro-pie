import * as sharedTypes from "./types";
import store from "../store";
import * as storeTypes from "../store/actionTypes";


const handlers = {
  [sharedTypes.login](token) {
    store.dispatch(storeTypes.set_token,token)
  },
  [sharedTypes.init](unUsed,state) {
    if(state.token){
      store.dispatch(storeTypes.set_token,state.token)
    }

  },
}
let initialState = {}
let setGlobalState = null
let onGlobalStateChange = null
let isInit = true
console.log(12121);

export const initShared = function (action) {
  console.log(action);
  if(!action.onGlobalStateChange || !action.setGlobalState){
    console.warn('主、子应用通信失败')
    return
  }
  onGlobalStateChange = action.onGlobalStateChange
  setGlobalState = action.setGlobalState
  onGlobalStateChange((...a)=>{
    console.log(a);
    return;
    if(!handlers[type]){
      console.warn('type类型错误')
      return
    }
    console.log({type,payload});

    if(isInit){
      handlers[sharedTypes.init](null,payload)
      initialState = payload
      isInit = false
    }else{
      const state = {...initialState,...payload}
      handlers[type](payload,state)
    }
  },true);
};

const dispatch = {
  add(payload){
    setGlobalState({
      type:'add',
      payload
    })
  }
}
export default dispatch
