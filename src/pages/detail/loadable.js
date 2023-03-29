import React from 'react';
import Loadable from 'react-loadable';


// 生成一个异步组件。
const LoadableComponent = Loadable({
    // 加载那一个组件？ 我们加载的是当前页面的index.js
    loader: () => import('./'),
    // 在加载页面等待的时候，我们想要显示的内容。loading要求是一个函数，返回的内容是一个临时显示的组件。
    loading() {
        return <div>正在加载页面</div>
    }
});

export default class App extends React.Component {
    render() {
        return <LoadableComponent />;
    }
}