import React, { Component, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './common/Header'
import store from './redux/store'
import Home from './pages/home'
// 下面这样操作就让detail变成了异步组件
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Writer from './pages/write'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            {/* 头部组件 */}
            <Header />
            {/* 注册路由 */}
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/login' exact component={Login} />
              <Route path='/write' exact component={Writer} />
              <Suspense >
                <Route path='/detail/:id' exact component={Detail} />
              </Suspense>
            </Switch>
          </div>
        </Provider>
      </div >
    )
  }
}

