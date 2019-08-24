//多种表单控件的双向数据绑定
//在当前组件中有很多数据，其中有一个数据存放的是模态框表单的数据
import React,{Component} from 'react';
class MyForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //性别 页面显示男,女,传递后台数据male,female
            genders: [{
                name: '男',
                value: 'male'
            }, {
                name: '女',
                value: 'female'
            }],
            //地址
            addresses: [{
                name: '江苏',
                value: 'jiangsu',
            }, {
                name: '江西',
                value: 'jiangxi',
            }, {
                name: '山西',
                value: 'shanxi',
            }],
            msg:'注册页面',
            form:{
                username:'',
                age:'',
                gender:'',
                addresses:'',
                desc:''
            }
        };
    }
    //事件处理程序
    inputChange = (attr,e)=>{
        //方法一
        //先获取form副本,修改副本中的username,再设置到state的form上
       /*  let form = Object.assign({},this.state.form);
        form[attr] = e.target.value;
        this.setState({
            form
            //form:form
        }); */
        //方法二
        this.setState({
            form:{...this.state.form,[attr]:e.target.value}
        });
    }
    toSubmit = ()=>{
        let obj = {...this.state.form};
        console.log(obj);
    }
    render(){
        const {form} = this.state;
        //const form = this.state.form
        return (
            <div className="MyForm" style={{padding:20}}>
                <h3>{this.state.msg}</h3>
                <form>
                    用户名:
                    <input value={form.username} type="text" onChange={this.inputChange.bind(this,'username')}/><br/>
                    年龄:
                    <input type='text' value={form.age} onChange={this.inputChange.bind(this,'age')}/><br/>
                    性别:
                    {
                        this.state.genders.map((item,index)=>{
                            return (
                                <label key={index}>
                                    <input type='radio' value={item.value} checked={form.gender===item.value?true:false} onChange={this.inputChange.bind(this,'gender')}/>{item.name}
                                </label>
                            );
                        })
                    }
                    <br/>
                    地址:
                    <select name="" value={form.address} onChange={this.inputChange.bind(this,'address')}>
                        <option value="">请选择</option>
                            {
                                this.state.addresses.map((item,index)=>{
                                    return <option key={index} value={item.value}>{item.name}</option>;
                                })
                            }
                    </select>
                    <br/>
                    描述:
                    <textarea value={form.desc} onChange={this.inputChange.bind(this,'desc')} name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button onClick={this.toSubmit}>提交</button>
            </div>
        );
    }
}
export default MyForms;