import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, hashHistory  } from 'react-router';


import App from './App/App.jsx';
import ItemBox from './ItemBox/ItemBox.jsx';

const Body = React.createClass({
    render() {
        return (
            <div>
                {/* 把`a`标签换成`Link`标签 */}
                <ul>
                    <li><Link to="/App">App</Link></li>
                    <li><Link to="/ItemBox">Item</Link></li>
                </ul>

                {/*
                 把`<Child>`替换成`this.props.children`
                 路由会渲染正确的组件
                 */}
                {this.props.children}
            </div>
        )
    }
});

render((
    <Router>
        <Route path="/" component={Body}>
            <Route path="App" component={App} />
            <Route path="ItemBox" component={ItemBox} />
        </Route>
    </Router>
), document.getElementById('app'));