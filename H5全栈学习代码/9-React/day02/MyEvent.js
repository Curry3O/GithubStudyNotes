//事件绑定
import React from 'react';
class MyEvent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            msg: 'hello',
        };
    }
    //方法一
    //使用箭头函数声明事件处理程序可以解决内部this指向的问题
    /* handle = (event)=>{
        console.log(event);
        console.log(this);
        this.setState({
            msg:'msg'
        });
    } */

    //方法二/三
    handle(event){
        this.setState({
            msg: 'msg'
        });
    }
    render(){
        return (
            <div>
                {/* <button onClick={this.handle}>点击{this.state.msg}</button> */}
                {/* <button onClick={this.handle.bind(this)}>点击{this.state.msg}</button> */}
                <button onClick={(event)=>{this.handle(event)}}>点击{this.state.msg}</button>
            </div>
        );
    }
}
export default MyEvent;