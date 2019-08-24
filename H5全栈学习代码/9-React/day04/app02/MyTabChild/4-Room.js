import React,{Component} from 'react';
class Room extends Component{
    //接受其他组件传递的数据
    componentDidMount() {
        console.log(this.props.location);
    }
    render(){
        return (
            <div>
                Room
            </div>
        );
    }
}
export default Room;