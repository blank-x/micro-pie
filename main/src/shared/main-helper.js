import { initGlobalState } from "qiankun";

export default ({initialState,mutation}) => {
  const actions = initGlobalState(initialState);
  actions.onGlobalStateChange((state,prev)=> {
    Object.keys(mutation).forEach(key=>{
      if(state[key] !== prev[key]){
        mutation[key](state[key],prev[key],state,prev)
      }
    })
  })
  let dispatch = {}
  Object.keys(mutation).forEach(item=>{
    dispatch[item] = (arg) =>actions.setGlobalState({[item]:arg})
  })
  return dispatch
}

