import React from 'react';
class MyState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            msg:'stateMsg',
            test:'test1'
        };
    }
    //生命周期钩子函数 
    //组件挂载完毕之后调用的钩子函数
    componentDidMount() {
        //更改state的数据
        //ajax axios
        /* this.setState({
            msg:'wonderful',
            test:'world'
        }); */
    }
    //组件将要被挂载的时候调用的钩子函数
    componentWillMount() {
        //走异步操作 
        //异步设置state数据
        //alert(0);
        this.setState({
            msg: 'wonderful',
            test: 'world'
        });
        console.log(this.state.msg); 
        //stateMsg,不是wonderful,因为this.setState方法是异步操作，不会立即生效
    }
    render(){
        let msg = 'renderMsg';
        return (
            <div>
                <h3>MyState展示</h3>
                <h3>{msg}</h3>
                <h3>{this.state.msg}--{this.state.test}</h3>
                <h3>{this.props.msg}</h3>
            </div>
        );
    }
}
export default MyState;