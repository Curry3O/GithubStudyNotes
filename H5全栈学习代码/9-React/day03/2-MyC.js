import React,{Component} from 'react';
class MyC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'msg'
        };
    }
    render() {
        return (
            <div>
                <h3>子组件MyC中的数据:{this.state.msg}</h3>
                <button onClick={this.props.changeParentState}>更改父组件中的数据</button>
                <h2>接受父组PCC件中的数据:{this.props.parentMsg}</h2>
            </div>
        );
    }
}
export default MyC;