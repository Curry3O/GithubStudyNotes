import React,{Component} from 'react';
import Index from './MyTabChild/1-index';
import Student from './MyTabChild/2-Student';
import Course from './MyTabChild/3-Course';
import Room from './MyTabChild/4-Room';
class MyTab extends Component{
    constructor(props) {
        super(props);
        this.state = {
            CurrentCom:Index
        }
    }
    //点击切换
    changeTab = (component)=>{
        this.setState({
            CurrentCom: component
        })
    }
    render(){
        //CurrentCom就是某个组件
        let {CurrentCom} = this.state;
        return (
            <div>
                <nav>
                    <button onClick={this.changeTab.bind(this,Index)}>首页管理</button>
                    <button onClick={this.changeTab.bind(this,Student)}>学生管理</button>
                    <button onClick={this.changeTab.bind(this,Course)}>课程管理</button>
                    <button onClick={this.changeTab.bind(this,Room)}>教室管理</button>
                </nav>  
                <div>
                    <CurrentCom />
                </div>
            </div>
        );
    }
}
export default MyTab;