//Test2组件
//用React-redux去做
import React from 'react';
import {connect} from 'react-redux';
import {changeTest2A,toGetDataA} from '../store/actionCreators/test2Action';
const Test2 = (props) =>{
    return (
        <div>
            <h3>react-redux</h3>
            {JSON.stringify(props)}
            <button onClick={props.changeTest2}>修改test2数据</button>
            <br/>
            <button onClick={props.toGetData}>获取数据</button>
            {JSON.stringify(props.arr)}
        </div>
    );
}
//connect(mapStateToProps)(Test2)
//connect第一个参数mapStateToProps是一个函数，函数有一个参数state，代表store中的所有数据。返回的对象，就是UI组件的props的数据

const mapStateToProps = (state,ownProps)=>{
    return {
        test:state.test2.msg,
        value:'hello',
        arr:state.test2.arr
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeTest2: () => {
            //分发action
            dispatch(changeTest2A('1111'));
        },
        toGetData: () =>{
            dispatch(toGetDataA());
        }
    }
}
// export default connect(state=>state.test2)(Test2);
export default connect(mapStateToProps, mapDispatchToProps)(Test2);