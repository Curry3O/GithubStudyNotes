import React,{Component} from 'react';
import Student from './HomeChilds/Student';
import Course from './HomeChilds/Course';
import {BrowserRouter,HashRouter,Switch,Link,Route,NavLink,Redirect} from 'react-router-dom';
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    change = () => {
        
    }
    render(){
        return (
            <div>
                <HashRouter>
                    <div>
                        <NavLink to="/student">学生管理</NavLink>
                        <NavLink to="/course">课程管理</NavLink>
                    </div>
                    <div>
                        <Switch>
                            <Redirect exact from="/" to="/student"></Redirect>
                            <Route path='/student' component={Student} />
                            <Route path='/course' component={Course} />
                            {/* 动态路由 */}
                            <Route path='/sc/:test' component={Course}/>
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}
export default Home;