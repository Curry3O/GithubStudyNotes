import React from 'react';
//导入MyTd组件
import MyTd from './MyTd';
//声明类组件
class MyTable extends React.Component{
    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>性别</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.props.stus.map((item,index)=>{
                               return (
                                   <tr key={index}><MyTd stu={item}/></tr>
                               );
                           })
                       }
                    </tbody>
                </table>
            </div>
        );
    }
}
//组件的导出
export default MyTable;