import React,{Component} from 'react';
//css模块化处理之后将不再直接导入运行，而是直接导入一个对象
import style from './TestCSS.css';
console.log(style);
class TestCSS extends Component{
    render(){
        return (
            <div>
                <span className={style.one}>hello</span>
                <span id={style.two}>hello</span>
                <h3>world</h3>
            </div>
        );
    }
}
export default TestCSS;