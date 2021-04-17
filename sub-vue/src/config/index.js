export const setLog = (module)=>{
  let log = console.log
  console.log = (...arg)=>{
    log(module,...arg)
  }
}
