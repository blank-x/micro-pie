import './App.css';
import React, { Suspense, useState, useEffect } from "react";

// import menus from './routes'
import Detail from "./pages/detail";
import List from "./pages/list";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";


function App() {
  return (
    <div className="App">
      <Router basename={BASE_NAME}>  {/*basename 这是一个路由空间*/}
        <section>
          <Link to="/list">to list</Link>
          <br/>
          <Link to="/detail">to detail</Link>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/list" component={List} />
              <Route exact path="/detail" component={Detail} />
            </Switch>
          </Suspense>
        </section>
      </Router>
    </div>
  );
}

export default App;
