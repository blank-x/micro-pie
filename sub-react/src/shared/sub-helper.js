export default ({ mutation, actions}) => {

  let isInit = true

  if (!window.__POWERED_BY_QIANKUN__) {
    actions = new LocalGlobalState()
  }
  actions.onGlobalStateChange((state, prev) => {
    console.log(state,prev);
    Object.keys(mutation).forEach(key => {
      if (state[key] !== prev[key] || isInit) {
        mutation[key](state[key], prev[key], state, prev)
      }
    })
    isInit = false
  }, true)
  let dispatch = {}
  Object.keys(mutation).forEach(item =>  {
    dispatch[item] = (arg) => actions.setGlobalState({[item]: arg})
  })
  console.log(dispatch);
  return dispatch
}

class LocalGlobalState{
  state={}
  lastState={}
  bindFns=[]

  onGlobalStateChange(fn) {
    if(!this.bindFns.includes(fn)){
      this.bindFns.push(fn)
    }
  }
  setGlobalState(arg) {
    if(Object.prototype.toString.call(arg) !== '[object Object]'){
      return
    }
    this.lastState = this.state
    this.state = {...this.lastState,...arg}
    this.bindFns.forEach(fn=>{
      fn(this.state,this.lastState)
    })
  }
}


