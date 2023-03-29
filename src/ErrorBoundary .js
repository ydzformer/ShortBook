import React from "react";
import App from "./App"

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: error };
    }

    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        console.log(error, errorInfo);
    }

    render() {
        return this.state.hasError ? <h2>当前网络不稳定，请等待</h2> : <App />
    }
}