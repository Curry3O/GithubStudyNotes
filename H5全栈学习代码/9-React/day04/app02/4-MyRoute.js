import React,{Component} from 'react';
import {BrowserRouter,HashRouter,Switch,Link,Route,NavLink,Redirect} from 'react-router-dom';
import Index from './MyTabChild/1-index';
import Student from './MyTabChild/2-Student';
import Course from './MyTabChild/3-Course';
import Room from './MyTabChild/4-Room';
import './MyRoute.scss';
class MyRoute extends Component{
    render(){
        return (
            <div>
                <HashRouter>
                    <nav>
                        <NavLink exact activeClassName="navActive" to="/">首页</NavLink>
                        <NavLink activeClassName="navActive" to="/student">学生管理</NavLink>
                        <NavLink activeClassName="navActive" to="/course">课程管理</NavLink>
                        <NavLink activeClassName="navActive" to="/room">教室管理</NavLink>
                        <NavLink activeClassName="navActive" to="/teacher">教师管理</NavLink>
                    </nav>
                    <div>
                        {/* 展示的组件 */}
                        <Switch>
                            <Redirect exact from="/" to="/student"></Redirect>
                            <Route exact path="/student" component={Student}></Route>
                            <Route path="/course" component={Course}></Route>
                            <Route path="/room" component={Room}></Route>
                            <Route path="/teacher" render={()=>{return <div>hello</div>;}}></Route>
                            {/* <Route path="/" component={Index}></Route> */}
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}
export default MyRoute;