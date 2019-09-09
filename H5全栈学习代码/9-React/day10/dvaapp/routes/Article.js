import React, { Component } from 'react';
import {Button} from 'antd';
import {connect} from 'dva';
class Article extends Component {
    render() {
        return (
            <div>
                hello
                {JSON.stringify(this.props.article)}
                <Button type="primary" onClick={this.props.changeMsg}>更改同步数据</Button>
                <Button type="primary" onClick={this.props.getData}>获取异步数据</Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeMsg: () => {
            //分发action 分发到article命名空间底下的action
            dispatch({type:'article/changeMsg1',payload:'111'});
        },
        getData:()=>{
            //分发action 
            dispatch({type:'article/getData1',payload:{page:0,pageSize:10}});
        }
    }
}
export default connect(state => state, mapDispatchToProps)(Article);
