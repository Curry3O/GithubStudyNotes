import React,{Component} from 'react';
class Student extends Component{
    toCourse = ()=>{
        // this.props.history.push('./course');
        //跳转路由并传递数据
        this.props.history.push({
            pathname:'./room',
            test:'测试',
            obj:{
                name:'hb',
                age:22
            }
        });
    }
    render(){
        return (
            <div>
                Student
                <button onClick={this.toCourse}>学生组件按钮,跳转课程组件</button>
            </div>
        );
    }
}
export default Student;