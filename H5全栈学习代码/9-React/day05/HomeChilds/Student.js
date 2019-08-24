import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Student extends Component {
    toCourse = ()=>{
        //API形式的路由跳转和传参
        this.props.history.push({
            pathname:'./course',
            test:'test',
            state:{
                name:'yoo'
            }
        });
    }
    render() {
        return (
            <div>
                学生管理
                {/* <button onClick={this.toCourse}>API传参</button> */}
                {/* <NavLink to='/course'>navlink跳转</NavLink> */}
                {/* <a href="#/course">a标签跳转</a> */}
                <NavLink to='/course?name=hb'>navlink跳转</NavLink>
                <NavLink to='/sc/2?name=yoo'>navlink动态路由跳转</NavLink>
            </div>
        );
    }
}

export default Student;