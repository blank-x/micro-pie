import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'
import {initShared} from "./shared";

function render(props) {
  if (props) {
    // 添加通信支持
    initShared(props);
  }
  ReactDOM.render(<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,document.getElementById("root"));
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log("ReactMicroApp bootstraped");
}
export async function mount(props) {
  console.log("ReactMicroApp mount", props);
  render(props);
}

export async function unmount() {
  console.log("ReactMicroApp unmount");
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
