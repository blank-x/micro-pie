import { Button } from 'antd';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import sharedDispatch from '../../shared'
export default function () {
  const token = useSelector(state=>state.token)
  const dispatch= useDispatch();

  const updateToken = ()=>{
    sharedDispatch.setToken(Math.random())
  }
  return (
    <div>
      <div>最新的token:{token}</div>
      <Button onClick={updateToken}>点击更新token</Button>
    </div>
  )
}


