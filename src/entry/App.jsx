import React from 'react';
import './App.css';
import {arrFind} from '../assets/common/test1';
// import {DatePicker, Rate, Form, Icon, Input, Button} from 'antd';
// import {  Button } from 'antd';
import logo from '@assets/images/logo.svg';

// console.log(DatePicker, Rate, Form, Icon, Input, Button);
// console.log(Button);
arrFind();


class App extends React.Component {

    handleHeaderClick = () => {
        import('../assets/common/test2').then((data) => {
            console.log(data.default);
        });
        console.log('异步加载');
    };

    render() {
        return (
            <div className="App">
                <header className="App-header" onClick={this.handleHeaderClick}>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Edit <code>src/entry/App.js</code> and save to reload.</p>
                </header>
            </div>
        );
    }
}

export default App;
