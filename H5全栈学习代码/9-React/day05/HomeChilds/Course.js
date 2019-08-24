import React, { Component } from 'react';

export class Course extends Component {
    componentDidMount() {
        //API传参，参数存放的位置
        console.log(this.props.location);
        //查询字符串参数的获取  查询字符串
        console.log(this.props.location.search);
        //获取动态路由的参数
        console.log(this.props.match);
        console.log(this.props.match.params);
    }
    render() {
        return (
            <div>
                课程管理
            </div>
        );
    }
}

export default Course;
