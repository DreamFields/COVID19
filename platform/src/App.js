import React ,{Fragment} from 'react';
import {GlobalStyle} from "./style";
import {Icon} from "./static/iconfont/iconfont";
import {Animate} from "./static/animate";

import { Provider } from 'react-redux'
import store from './store'

// 引入路由，需安装
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//引入组件
import {MyFragment} from './style'
import Header from './common/header/index';
import Emotion from './pages/more';
import Extract from './pages/service';
import Rumor from './pages/rumor';
import ResultTitle from './common/resultTitle';

function App() {
  return (
      // center标签html5已经废弃
      //<center>
      <Provider store={store}>
          {/*若要使用全局样式，需要在App根组件中引入*/}
          <Icon/>
          <GlobalStyle/>
          <Animate/>
          {/***************************************/}

          {/*开始使用路由*/}
          <Router>
              {/*网站头部，设置了fixed*/}
              <Header/>
              <MyFragment></MyFragment> {/*高度等于Header的占位*/}

              {/*总体摘要*/}
              <div className={'animated slideInUp '}>
                  <ResultTitle/>
              </div>
              {/*路由*/}
              <Route path={'/'} exact component={Extract}></Route>
              <Route path={'/emotion'} exact component={Emotion}></Route>
              <Route path={'/rumor'} exact component={Rumor}></Route>
              {/*<Route path={'/About'} exact component={About}></Route>*/}
          </Router>
      </Provider>
      // </center>

  );
}

export default App;
