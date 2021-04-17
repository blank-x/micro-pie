import { createStore } from 'redux'
const reducer = function (state = {}, action) {
  switch (action.type) {
    case 'setToken':
      return { ...state, token: action.payload }
    case 'setUser':
      return { ...state, user: action.payload }
    default:
      return state
  }
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
