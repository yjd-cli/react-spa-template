import 'antd/dist/antd.css';
import './index.css';
import '@assets/styles/reset.less';
import React from 'react';
import ReactDOM from 'react-dom';
// import moment from 'moment';
// import _ from 'lodash';
import 'moment/locale/zh-cn';
// import {Provider} from 'react-redux';
// import store from './store';
// import {Route, Switch} from 'react-router-dom';
// import {ConnectedRouter} from 'connected-react-router';
// import history from '@edit-store/history';
import {ConfigProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import App from './App';

// console.log(_.assign({'a': 1}, {'b': 2}, {'c': 3}));
// console.log(_.map([1, 2, 3], n => n * 3));

/*
function renderApp() {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
*/

function renderApp() {
    ReactDOM.render(
        <ConfigProvider locale={zh_CN}>
            <App/>
           {/* <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Route path='/' component={App}/>
                </ConnectedRouter>
            </Provider>*/}
        </ConfigProvider>
        , document.getElementById('root'));
}

renderApp();

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }
}