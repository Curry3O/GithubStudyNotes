import React,{Component} from 'react';
//引入外部样式
import './3-Style.css';
class Style extends Component{
    render(){
        let btnStyle = {background:'teal',width:100,border:'none',fontSize:30,color:'white',borderRadius:5};
        return (
            <div className="Style">
                <span style={{color:'red',fontSize:40}}>hello</span>
                <button style={btnStyle}>按钮</button>
                <h3>world</h3>
            </div>
        );
    }
}
export default Style;