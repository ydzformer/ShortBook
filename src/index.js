import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyled } from './style';
import { IconGlobal } from './statics/iconFont/iconfont';
import ErrorBoundary from './ErrorBoundary ';

ReactDOM.render(
  <Fragment>
    <GlobalStyled></GlobalStyled>
    <IconGlobal></IconGlobal>
    {/* 用路由器组件包裹App组件 */}
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </Fragment>
  , document.getElementById('root'));


