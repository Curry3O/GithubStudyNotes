import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeMsg,getDataAxAction,getDataSaAction,deleteDataSaAction} from '../store/actionCreators/articleAction';
class Article extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props)}
                <button onClick={this.props.changeMsg}>更改msg-同步</button>
                <button onClick={this.props.getData}>异步获取数据</button>
                <button onClick={this.props.deleteDataById}>异步删除数据</button>
            </div>
        );
    }
}
 
const mapStateToProps = (state,ownProps) =>{
    return state;
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeMsg:()=>{
            //分发action
            dispatch(changeMsg('更改后的数据'));
        },
        getData:()=>{
            //分发action thunk
            // dispatch(getDataAxAction({page:0,pageSize:10}));
             
            //分发action saga
            dispatch(getDataSaAction({ page: 0, pageSize: 10 }));

        },
        deleteDataById:()=>{
            //分发action saga
            dispatch(deleteDataSaAction({id:4062}));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article);