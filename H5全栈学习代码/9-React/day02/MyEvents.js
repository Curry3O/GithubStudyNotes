//事件传参
import React from 'react';
class MyEvents extends React.Component{
    handle = (a,b,event)=>{
        //获取事件参数
        // console.log(event.target.getAttribute('data-id'));
        console.log(a,b,event);
    }
    render(){
        return (
            <div>
               {/*  <button data-id='1001' onClick={this.handle.bind(this,1002,1003)}>点击</button> */}

                <button data-id='1001' onClick={(e)=>{this.handle(1002,1003,e)}}>点击</button>
            </div>
        );
    }
}
export default MyEvents;