//Test1组件
//展示store中的数据
import React, { Component } from 'react';
import store from '../store';
import {changeTest1A} from '../store/actionCreators/test1Action';
import {changeTest2A} from '../store/actionCreators/test2Action';
class Test1 extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.changeState);
    }
    changeTest1 = ()=>{
        //分发action,action对象
        store.dispatch(changeTest1A('hbbb'));
    }
    changeTest2 = () => {
        store.dispatch(changeTest2A('lmmm'));
    }
    changeState = () =>{
        this.setState(store.getState());
    }
    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <button onClick={this.changeTest1}>更改test1数据</button>
                <button onClick={this.changeTest2}>更改test2数据</button>
            </div>
        );
    }
}

export default Test1;
