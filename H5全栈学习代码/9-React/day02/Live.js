import React from 'react';
class Live extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'hello world',
        };
    }
    //在组件将要被挂载前
    componentWillMount() {
       console.log(this.state);
    }
    //组件挂载完毕
    componentDidMount() {
        //修改数据
        setTimeout(() => {
            this.setState({
                msg: 'wonderful world'
            });
        }, 2000);
        console.log(this.state,'+++');
    }
    //是否可以更新
    shouldComponentUpdate() {
        //返回true更新(默认值),返回false不更新也不会再渲染在页面上
        return true;
    }
    //将要更新
    componentWillUpdate(){
        alert(1);
    }
    componentDidUpdate() {
        alert(2);
    }
    componentWillUnmount() {
        console.log('将要被卸载');
    }
    
    render(){
        console.log('render----');
        return (
            <h3>{this.state.msg}</h3>
        );
    }
}
export default Live;