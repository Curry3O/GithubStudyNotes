//在父组件中修改子组件中的state中数据
//如何在父组件中拿到子组件的实例，就可以听过子组件的实例调用setState去更改子组件state的数据
//PCC当做父组件去使用
import React,{Component} from 'react';
import MyC from './2-MyC';
class MyPCC extends Component{
    constructor(props) {
        super(props);
        this.state = {
            parentMsg: 'parentMsg'
        };
    }
    changeChildState = ()=>{
        const myc = this.refs.myc;
        console.log(myc.state.msg);
        myc.setState({
            msg:'hello'
        });
    }
    //更改父组件的state数据
    changeParentState = ()=>{
       this.setState({parentMsg:'parentHello'});
    }
    render(){
        return (
            <div>
                <div ref={(node)=>{console.log(node,'--');}}>ref值为回调函数</div>
                <button onClick={this.changeChildState}>点击更改子组件中state中msg</button>
                <MyC ref="myc" parentMsg={this.state.parentMsg} changeParentState={this.changeParentState}/>
            </div>
        );
    }
}
export default MyPCC;